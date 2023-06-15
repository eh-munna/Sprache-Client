import { useLocation } from 'react-router-dom';
import Heading from '../../../components/Heading';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PaymentPK);

const Payment = () => {
  const location = useLocation();
  const item = location?.state;
  const price = parseFloat(item?.price.toFixed(2));
  console.log(price);
  return (
    <div>
      <Heading>Please Pay</Heading>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
