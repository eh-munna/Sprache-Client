import useAuth from '../../../hooks/useAuth';
import useInstructorClass from '../../../hooks/useInstructorClass';

const InstructorHome = () => {
  const { user } = useAuth();
  const [instructorClass, refetch] = useInstructorClass();
  const pending = instructorClass?.filter((item) => item.status === 'pending');
  const approved = instructorClass?.filter(
    (item) => item.status === 'approved'
  );
  console.log(pending?.length);
  return (
    <>
      <h3 className="text-4xl text-[#5a189a] font-[archivo] pb-8">
        Welcome <span className="text-[#4361ee]">{user?.displayName}!</span> to
        your dashboard
      </h3>
      <div className="grid grid-cols-2 pt-6 gap-3">
        <div className="border-[#c670fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#c670fe] text-[#fff]">
          <h2 className="text-2xl text-center font-[archivo]">
            My Pending Classes
          </h2>
          <p className="pt-8 font-[roboto] text-xl">
            {pending?.length ? `${pending?.length}` : `${pending?.length}`}
          </p>
        </div>

        <div className="border-[#70b6fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#70b6fe] text-[#fff]">
          <h2 className="text-2xl  text-center font-[archivo]">
            My Approved Classes
          </h2>
          <p className="pt-8 font-[roboto] text-xl">
            {approved ? `${approved?.length}` : `0`}
          </p>
        </div>
      </div>
    </>
  );
};

export default InstructorHome;
