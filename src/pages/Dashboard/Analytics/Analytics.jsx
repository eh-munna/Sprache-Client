import useLoadUsers from '../../../hooks/useLoadUsers';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useLoadClasses from '../../../hooks/useLoadClasses';

const Analytics = () => {
  const { user } = useAuth();

  const [users, refetch] = useLoadUsers();
  const [classes] = useLoadClasses();

  // TODO: ADMIN...

  const [isAdmin] = useAdmin();

  return (
    <div className="">
      <h3 className="text-4xl text-[#5a189a] font-[archivo] pb-8">
        Welcome <span className="text-[#4361ee]">{user?.displayName}!</span> to
        your dashboard
      </h3>

      {isAdmin ? (
        <>
          <div className="grid grid-cols-2 pt-6 gap-3">
            <div className="border-[#c670fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#c670fe] text-[#fff]">
              <h2 className="text-2xl text-center font-[archivo]">
                Total Classes
              </h2>
              <p className="pt-8 font-[roboto] text-xl">{classes.length}</p>
            </div>

            <div className="border-[#70b6fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#70b6fe] text-[#fff]">
              <h2 className="text-2xl  text-center font-[archivo]">
                Total Users
              </h2>
              <p className="pt-8 font-[roboto] text-xl">{users.length}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 pt-6 gap-3">
            <div className="border-[#c670fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#c670fe] text-[#fff]">
              <h2 className="text-2xl text-center font-[archivo]">
                Selected Classes
              </h2>
              <p className="pt-8 font-[roboto] text-xl">9</p>
            </div>

            <div className="border-[#70b6fe] border border-opacity-5 shadow-xl p-4 rounded-md flex flex-col items-center justify-center bg-[#70b6fe] text-[#fff]">
              <h2 className="text-2xl  text-center font-[archivo]">
                Enrolled Classes
              </h2>
              <p className="pt-8 font-[roboto] text-xl">9</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Analytics;
