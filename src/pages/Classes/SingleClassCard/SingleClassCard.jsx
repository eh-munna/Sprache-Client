import { BsBook } from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { RiMoneyEuroBoxLine } from 'react-icons/ri';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const SingleClassCard = ({ singleClass }) => {
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { classImg, courseName, instructorName, availableSeats, price } =
    singleClass;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { user } = useAuth();

  const bookClass = (item) => {
    const {
      _id,
      classImg,
      courseName,
      instructorName,
      availableSeats,
      price,
      instructorEmail,
      enrolledStudents,
    } = item;

    if (user) {
      axiosSecure
        .post(`/booked`, {
          bookedId: _id,
          classImg,
          courseName,
          instructorName,
          availableSeats,
          price,
          instructorEmail,
          enrolledStudents,
          email: user.email,
        })
        .then((res) => {
          if (res.data.insertedId) {
            toast.success('Course booked successfully', {
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
    } else {
      navigate('/sign-in', { state: { from: location } });
      toast.warn('You are not logged in', {
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
  };

  return (
    <div
      className={`flex flex-col justify-between gap-4 shadow-xl rounded-b-lg ${
        availableSeats === 0 && `bg-red-500`
      }`}
    >
      <div>
        <img
          className="max-w-full object-cover rounded-t-lg w-full h-52"
          src={classImg}
          alt=""
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="flex gap-2 items-center font-archivo font-bold text-[#5a189a] text-2xl">
          <span>
            <BsBook />
          </span>
          {courseName}
        </h3>
        <h3 className="flex gap-2 items-center font-archivo font-bold text-[#b61984] text-xl">
          <span>
            <GiTeacher />
          </span>
          {instructorName}
        </h3>
        <p
          className="font-roboto flex items-center gap-2 text-[#4361ee]
"
        >
          <span>
            <SiGoogleclassroom />
          </span>
          {availableSeats > 1
            ? `${availableSeats} seats available`
            : `0 seat available`}
        </p>
        <p
          className="font-roboto flex items-center gap-2 text-[#4361ee]
"
        >
          <span>
            <RiMoneyEuroBoxLine />
          </span>
          {price}€
        </p>
        <button
          onClick={() => bookClass(singleClass)}
          disabled={isAdmin || isInstructor}
          className="w-full font-[roboto] bg-[#7371fc] rounded-full py-1 px-3 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default SingleClassCard;
