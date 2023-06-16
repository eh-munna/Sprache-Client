import { toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UsersRow = ({ user, idx, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { _id, name, adminRole, instructorRole, email } = user;

  const makeAdmin = (id) => {
    axiosSecure
      .patch(`https://sprache-server.vercel.app/users/admin/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          toast.success(`${name} is an admin now`, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      });
  };

  // making instructor
  const makeInstructor = (id) => {
    axiosSecure
      .patch(`https://sprache-server.vercel.app/users/instructor/${id}`, {
        email,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          toast.success(`${name} is an instructor now`, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      });
  };

  return (
    <div className="grid  grid-cols-4 pt-6 gap-3 justify-center items-center">
      <div className="font-medium font-[roboto] text-base text-[#7371fc] ">
        {idx + 1}
      </div>
      <div className="font-medium font-[roboto] text-base text-[#7371fc] ">
        {name}
      </div>
      <div className="font-medium font-[roboto] text-base text-[#7371fc] col-span-2 flex flex-col md:flex-row gap-1 md:gap-3 justify-center items-center">
        <button
          onClick={() => makeAdmin(_id)}
          disabled={adminRole}
          className="font-[roboto] bg-[#7371fc] rounded-full py-1 px-2 md:px-4 hover:bg-[#3c096c] text-sm md:text-base text-[#fff] disabled:cursor-not-allowed disabled:opacity-75"
        >
          {adminRole ? 'Admin' : 'Make Admin'}
        </button>

        <button
          onClick={() => makeInstructor(_id)}
          disabled={instructorRole}
          className="font-[roboto] bg-[#7371fc] rounded-full py-1 px-2 md:px-4 hover:bg-[#3c096c] text-sm md:text-base text-[#fff] disabled:cursor-not-allowed disabled:opacity-75"
        >
          {instructorRole ? 'Instructor' : 'Make Instructor'}
        </button>
      </div>
    </div>
  );
};

export default UsersRow;
