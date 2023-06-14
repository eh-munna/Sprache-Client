const SelectClassRow = ({ book, idx }) => {
  const { courseName } = book;
  return (
    <div className="grid md:grid-cols-3 pt-6 gap-3 justify-center items-center">
      <div>{idx + 1}</div>
      <div>{courseName}</div>
      <div>
        <button className="border-rose-600">Pay</button>
      </div>
    </div>
  );
};

export default SelectClassRow;
