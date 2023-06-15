import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageClassRow = ({ singleClass, refetch }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
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
    axios.patch(`http://localhost:5000/approve/${id}`).then((res) => {
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
      setBtnDisabled(true);
    });
  };
  const denyClass = (id) => {
    axios.patch(`http://localhost:5000/deny/${id}`).then((res) => {
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

      setBtnDisabled(true);
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
      <div className="flex flex-col gap-2">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {status}
        </p>
        <button
          onClick={() => approveClass(_id)}
          disabled={status === 'approved' || (status === 'denied' && true)}
          className="font-[roboto] bg-[#7371fc] rounded-full p-1 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
        >
          approve
        </button>
        <button
          onClick={() => denyClass(_id)}
          disabled={status === 'approved' || (status === 'denied' && true)}
          className="font-[roboto] bg-[#7371fc] rounded-full p-1 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
        >
          deny
        </button>
        <button className="font-[roboto] bg-[#7371fc] rounded-full p-1 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]">
          <Link to="/dashboard/feedback" state={singleClass}>
            feedback
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ManageClassRow;
