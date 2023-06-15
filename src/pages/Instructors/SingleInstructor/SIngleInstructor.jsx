import { TfiEmail } from 'react-icons/tfi';
const SIngleInstructor = ({ singleInstructor }) => {
  const { userPhotoUrl, name, instructorEmail } = singleInstructor;
  return (
    <div className="shadow-xl rounded-b-lg">
      <div>
        <img
          className="max-w-full object-cover rounded-t-lg w-full h-52"
          src={userPhotoUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="font-archivo font-bold text-[#5a189a] text-xl">
          {name}
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
