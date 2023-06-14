import useAuth from '../../../hooks/useAuth';
import useBooked from '../../../hooks/useBooked';

const UserHome = () => {
  const [booked, refetch] = useBooked();
  const { user } = useAuth();
  return (
    <>
      <h3 className="text-4xl text-[#5a189a] font-[archivo] pb-8">
        Welcome <span className="text-[#4361ee]">{user?.displayName}!</span> to
        your dashboard
      </h3>

      <div className="grid grid-cols-2 pt-6 gap-3">
        <div className="border-[#c670fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#c670fe] text-[#fff]">
          <h2 className="text-2xl text-center font-[archivo]">
            Selected Classes
          </h2>
          <p className="pt-8 font-[roboto] text-xl"> {booked.length}</p>
        </div>

        <div className="border-[#70b6fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#70b6fe] text-[#fff]">
          <h2 className="text-2xl  text-center font-[archivo]">
            Enrolled Classes
          </h2>
          <p className="pt-8 font-[roboto] text-xl">-</p>
        </div>
      </div>
    </>
  );
};

export default UserHome;
