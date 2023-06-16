import { AiFillCreditCard, AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
const SelectClassRow = ({ refetch, book, idx }) => {
  const [axiosSecure] = useAxiosSecure();
  const deleteClass = (bookedId) => {
    axiosSecure.delete(`/delete-book/${bookedId}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success('Class is removed', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        refetch();
      }
    });
  };

  const { courseName, bookedId } = book;
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
          <button onClick={() => deleteClass(bookedId)}>
            <AiOutlineDelete />
          </button>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="font-[roboto] text-[#7371fc] inline-flex items-center justify-center text-xl">
          <button>
            <Link to="/dashboard/payment" state={book}>
              <AiFillCreditCard />
            </Link>
          </button>
        </span>
      </div>
    </div>
  );
};

export default SelectClassRow;
