import { BsBook } from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { RiMoneyEuroBoxLine } from 'react-icons/ri';
const SingleClassCard = ({ singleClass }) => {
  const { classImg, courseName, instructorName, availableSeats, price } =
    singleClass;
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
          {price}
        </p>
      </div>
    </div>
  );
};

export default SingleClassCard;
