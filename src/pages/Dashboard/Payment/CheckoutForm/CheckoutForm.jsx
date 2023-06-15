import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useBooked from '../../../../hooks/useBooked';
import { toast } from 'react-toastify';

// TODO: remove console log

const CheckoutForm = ({ price, item }) => {
  const { user } = useAuth();
  const [, refetch] = useBooked();
  const { courseName, _id, bookedId } = item;
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [cardError, setCardError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError('');
      // console.log('[PaymentMethod]', paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError);
    }
    console.log('payment-intent', paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      const payment = {
        studentEmail: user?.email,
        courseName,
        courseId: _id,
        bookedId: bookedId,
        transactionId: paymentIntent.id,
        price,
      };
      axiosSecure.post('/payments', payment).then((res) => {
        if (res.data.insertedId) {
          toast.success('Payment is successful', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      });
      axiosSecure.delete(`/delete-book/${bookedId}`).then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
        }
      });
      axiosSecure.patch(`/reduce-seat/${bookedId}`).then(() => refetch());
      axiosSecure.patch(`/increase-enroll/${bookedId}`).then(() => refetch());
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="pt-5">
          <button
            className="font-[roboto] bg-[#7371fc] rounded-full py-0.5 px-4 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      <div className="pt-6">
        {cardError && <p className="text-red-500">{cardError}</p>}
        {transactionId && (
          <p className="text-green-500">Transaction id : {transactionId}</p>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
