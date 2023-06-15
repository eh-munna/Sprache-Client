const HistoryRow = ({ payment, idx }) => {
  const { courseName, price } = payment;
  return (
    <div className="grid grid-cols-3 pt-6 gap-3">
      <div className="flex flex-col">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {idx + 1}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {courseName}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default HistoryRow;
