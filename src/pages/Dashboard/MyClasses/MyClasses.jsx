import useInstructorClass from '../../../hooks/useInstructorClass';
import MyClassRow from './MyClassRow/MyClassRow';

const MyClasses = () => {
  const [instructorClass, refetch] = useInstructorClass();

  return (
    <div className="">
      <h2 className="font-[archivo] text-center text-2xl text-[#5a189a] font-bold capitalize">
        Total Added {instructorClass?.length <= 1 ? `class :` : `classes :`}{' '}
        {instructorClass?.length}
      </h2>

      <div className="grid grid-cols-6 pt-6 gap-3">
        <div className="col-span-2 flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Course Name
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Status
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Enrolled Students
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Feedback
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase">
            Update
          </p>
        </div>
      </div>
      <div>
        {instructorClass?.map((item, idx) => (
          <MyClassRow idx={idx} key={item._id} item={item} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
