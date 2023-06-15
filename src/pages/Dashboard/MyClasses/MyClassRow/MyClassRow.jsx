import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineFeedback } from 'react-icons/md';

const MyClassRow = ({ item, refetch }) => {
  const { courseName, status } = item;
  return (
    <div className="grid grid-cols-6 pt-6 gap-3">
      <div className="col-span-2 flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {courseName}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {status === 'pending'
            ? `Pending`
            : status === 'denied'
            ? 'Denied'
            : 'Aprroved'}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">0</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {status === 'denied' ? 'Denied ' : status === 'approved' ? ' ' : ' '}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <span className="font-[roboto] text-[#7371fc] text-xl">
          <button>
            <AiOutlineEdit />
          </button>
        </span>
      </div>
    </div>
  );
};

export default MyClassRow;
