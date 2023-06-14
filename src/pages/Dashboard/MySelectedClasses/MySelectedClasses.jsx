import useBooked from '../../../hooks/useBooked';
import SelectClassRow from './SelectClassRow/SelectClassRow';

const MySelectedClasses = () => {
  const [booked, refetch] = useBooked();

  return (
    <div className="">
      <h2 className="font-[archivo] text-center text-2xl text-[#5a189a] font-bold capitalize">
        Total selected classes : {booked.length}
      </h2>

      <div className="grid md:grid-cols-3 pt-6 gap-3 justify-center items-center">
        <div className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase ">
          #
        </div>
        <div className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase ">
          Name
        </div>
        <div className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
          Pay
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

export default MySelectedClasses;
