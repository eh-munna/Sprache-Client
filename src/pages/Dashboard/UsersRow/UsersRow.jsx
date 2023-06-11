import { FaTrashAlt } from 'react-icons/fa';
import Button from '../../../components/Button/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, idx, refetch }) => {
  const [isAdminDisabled, setAdminDisabled] = useState(false);
  const [isInstructorDisabled, setInstructorDisabled] = useState(false);
  const { _id, name, email, role } = user;

  const makeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
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
    setAdminDisabled(true);
  };
  const makeInstructor = (_id) => {
    console.log(_id);
    setInstructorDisabled(true);
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
          disabled={isAdminDisabled}
          className="font-[roboto] bg-[#7371fc] rounded-full py-1 px-2 md:px-4 hover:bg-[#3c096c] text-sm md:text-base text-[#fff]"
        >
          {role === 'admin' ? 'Admin' : 'Make Admin'}
        </button>

        <button
          onClick={() => makeInstructor(_id)}
          disabled={isInstructorDisabled}
          className="font-[roboto] bg-[#7371fc] rounded-full py-1 px-2 md:px-4 hover:bg-[#3c096c] text-sm md:text-base text-[#fff]"
        >
          {role === 'instructor' ? 'Instructor' : 'Make Instructor'}
        </button>
      </div>
    </div>
  );
};

export default UsersRow;