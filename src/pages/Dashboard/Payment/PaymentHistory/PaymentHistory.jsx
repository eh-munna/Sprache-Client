import usePaymentHistory from '../../../../hooks/usePaymentHistory';
import HistoryRow from './HistoryRow';

const PaymentHistory = () => {
  const [paymentData, refetch] = usePaymentHistory();
  return (
    <div className="">
      <h2 className="font-[archivo] text-center text-2xl text-[#5a189a] font-bold capitalize">
        Payment History
      </h2>

      <div className="grid grid-cols-3 pt-6 gap-3">
        <div className="flex flex-col">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            #
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Course Name
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Amount
          </p>
        </div>
      </div>
      <div>
        {paymentData?.map((payment, idx) => (
          <HistoryRow
            idx={idx}
            key={payment._id}
            payment={payment}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
