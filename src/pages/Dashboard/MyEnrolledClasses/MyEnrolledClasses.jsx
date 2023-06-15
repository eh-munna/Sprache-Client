import useEnrolled from '../../../hooks/useEnrolled';
import EnrolledClassRow from './EnrolledClassRow';

const MyEnrolledClasses = () => {
  const [enrolled, refetch] = useEnrolled();

  return (
    <div className="">
      <h2 className="font-[archivo] text-center text-2xl text-[#5a189a] font-bold capitalize">
        Total enrolled {enrolled.length <= 1 ? `class :` : `classes :`}{' '}
        {enrolled.length}
      </h2>

      <div className="grid grid-cols-2 pt-6 gap-3">
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            #
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Course Name
          </p>
        </div>
      </div>
      <div>
        {enrolled?.map((enrolled, idx) => (
          <EnrolledClassRow
            idx={idx}
            key={enrolled._id}
            enrolled={enrolled}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
