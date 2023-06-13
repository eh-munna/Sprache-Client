import { TfiEmail } from 'react-icons/tfi';
const SIngleInstructor = ({ singleClass }) => {
  const { classImg, instructorName, instructorEmail } = singleClass;
  return (
    <div className="shadow-xl rounded-b-lg">
      <div>
        <img
          className="max-w-full object-cover rounded-t-lg w-full h-52"
          src={classImg}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="font-archivo font-bold text-[#5a189a] text-xl">
          {instructorName}
        </h3>
        <p className="font-roboto flex items-center gap-2 text-[#b61984]">
          <span className=" capitalize">
            <TfiEmail></TfiEmail>
          </span>
          {instructorEmail}
        </p>
      </div>
    </div>
  );
};

export default SIngleInstructor;
