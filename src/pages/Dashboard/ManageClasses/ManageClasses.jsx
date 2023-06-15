import { AiFillCreditCard, AiOutlineDelete } from 'react-icons/ai';
import useLoadClasses from '../../../hooks/useLoadClasses';
import { Link } from 'react-router-dom';
import ManageClassRow from './ManageClassRow/ManageClassRow';

const ManageClasses = () => {
  const [classes, refetch] = useLoadClasses();

  return (
    <>
      <h2 className="font-[archivo] text-center text-2xl text-[#5a189a] font-bold capitalize">
        Total {classes?.length <= 1 ? `class :` : `classes :`} {classes?.length}
      </h2>
      <div className="grid grid-cols-8 pt-6 gap-3">
        <div className="flex flex-col"></div>
        <div className="flex flex-col">
          <p className="capitalize font-roboto font-medium text-[#4361ee]">
            Course
          </p>
        </div>
        <div className="flex flex-col">
          <p className="capitalize font-roboto font-medium text-[#4361ee]">
            Instructor Name
          </p>
        </div>
        <div className="flex flex-col col-span-2">
          <p className="capitalize font-roboto font-medium text-[#4361ee]">
            Instructor Email
          </p>
        </div>
        <div className="flex flex-col">
          <p className="capitalize font-roboto font-medium text-[#4361ee]">
            Available Seats
          </p>
        </div>
        <div className="flex flex-col">
          <p className="capitalize font-roboto font-medium text-[#4361ee]">
            Price
          </p>
        </div>
        <div className="flex flex-col">
          <p className="capitalize font-roboto font-medium text-[#4361ee]">
            Status
          </p>
        </div>
      </div>

      <div>
        {classes?.map((singleClass) => (
          <ManageClassRow
            key={singleClass._id}
            singleClass={singleClass}
            refetch={refetch}
          />
        ))}
      </div>
    </>
  );
};

export default ManageClasses;
