import axios from 'axios';
import { useState } from 'react';
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
    axios
      .patch(`https://sprache-server.vercel.app/approve/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
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
        refetch();
        setBtnDisabled(true);
      });
  };
  const denyClass = (id) => {
    axios.patch(`https://sprache-server.vercel.app/deny/${id}`).then((res) => {
      if (res.data.modifiedCount) {
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
      refetch();
      setBtnDisabled(true);
    });
  };
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
          disabled={btnDisabled}
          className="font-[roboto] bg-[#7371fc] rounded-full p-1 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
        >
          approve
        </button>
        <button
          onClick={() => denyClass(_id)}
          disabled={btnDisabled}
          className="font-[roboto] bg-[#7371fc] rounded-full p-1 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
        >
          deny
        </button>
        <button
          onClick={() => denyClass(_id)}
          className="font-[roboto] bg-[#7371fc] rounded-full p-1 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
        >
          feedback
        </button>
      </div>
    </div>
  );
};

export default ManageClassRow;
