import { AiFillCreditCard, AiOutlineDelete } from 'react-icons/ai';
const SelectClassRow = ({ book, idx }) => {
  const { courseName } = book;
  return (
    <div className="grid grid-cols-5 pt-6 gap-3">
      <div className="flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {idx + 1}
        </p>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {courseName}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <span className="font-[roboto] text-[#7371fc] text-xl">
          <button>
            <AiOutlineDelete />
          </button>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="font-[roboto] text-[#7371fc] inline-flex items-center justify-center text-xl">
          <button>
            <AiFillCreditCard />
          </button>
        </span>
      </div>
    </div>
  );
};

export default SelectClassRow;
