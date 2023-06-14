const MyClasses = () => {
  return (
    <div className="">
      <h2 className="font-[archivo] text-center text-2xl text-[#5a189a] font-bold capitalize">
        Total selected {booked.length <= 1 ? `class :` : `classes :`}{' '}
        {booked.length}
      </h2>

      <div className="grid grid-cols-5 pt-6 gap-3">
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            #
          </p>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Course Name
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Remove
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Pay
          </p>
        </div>
      </div>
      <div>
        {booked.map((book, idx) => (
          <SelectClassRow
            idx={idx}
            key={book._id}
            book={book}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
