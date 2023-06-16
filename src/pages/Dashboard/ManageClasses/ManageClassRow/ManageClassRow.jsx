// import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageClassRow = ({ singleClass, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const {
    _id,
    courseName,
    price,
    classImg,
    availableSeats,
    instructorName,
    instructorEmail,
    status,
  } = singleClass;

  const approveClass = (id) => {
    axiosSecure.patch(`/approve/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`Class is approved`, {
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
  const denyClass = (id) => {
    axiosSecure.patch(`/deny/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`Class is denied`, {
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

  // if (status === 'approved') {
  //   setBtnDisabled(true);
  // }
  return (
    <div className="grid grid-cols-8 pt-6 gap-3">
      <div className="flex flex-col">
        <img className="h-10 w-10" src={classImg} alt="empty" />
      </div>
      <div className="flex flex-col">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {courseName}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {instructorName}
        </p>
      </div>
      <div className="flex  flex-col col-span-2">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {instructorEmail}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {availableSeats}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {price}
        </p>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {status}
        </p>
        <button
          onClick={() => approveClass(_id)}
          disabled={status === 'approved' || (status === 'denied' && true)}
          className="font-[roboto] bg-[#7371fc] rounded-full md:py-1 md:px-3 flex flex-col items-center hover:bg-[#3c096c] text-base text-[#fff] disabled:cursor-not-allowed disabled:opacity-75"
        >
          approve
        </button>
        <button
          onClick={() => denyClass(_id)}
          disabled={status === 'approved' || (status === 'denied' && true)}
          className="font-[roboto] bg-[#7371fc] rounded-full md:py-1 md:px-3 flex flex-col items-center hover:bg-[#3c096c] text-base text-[#fff] disabled:cursor-not-allowed disabled:opacity-75"
        >
          deny
        </button>
        <button className="font-[roboto] bg-[#7371fc] rounded-full md:py-1 md:px-3 flex flex-col items-center hover:bg-[#3c096c] text-base text-[#fff] disabled:cursor-not-allowed disabled:opacity-75">
          <Link to="/dashboard/feedback" state={singleClass}>
            feedback
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ManageClassRow;
