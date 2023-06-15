const SchedulesCard = ({ item }) => {
  const { courseName, classImg } = item;

  return (
    <>
      <div className="flex flex-col shadow-xl rounded-lg ">
        <div className="relative ">
          <img className="max-w-full rounded-t-lg" src={classImg} alt="" />
          <div className="bg-slate-800 rounded-t-lg w-full h-full absolute top-0 opacity-60"></div>
          <h3 className="absolute bottom-1/4 left-6  text-2xl font-bold font-[archivo] text-white">
            {courseName}
          </h3>
        </div>
        <div className="flex flex-col py-3">
          <ul className="divide-y divide-[#480ca8] divide-opacity-10">
            <li className="flex justify-between p-4 text-base font-medium uppercase text-[#4361ee]">
              <span>Monday</span>
              <span>10 - 11 am</span>
            </li>
            <li className="flex justify-between p-4 text-base font-medium uppercase text-[#4361ee]">
              <span>Tuesday</span>
              <span>10 - 11 am</span>
            </li>
            <li className="flex justify-between p-4 text-base font-medium uppercase text-[#4361ee]">
              <span>Wednesday</span>
              <span>10 - 11 am</span>
            </li>
            <li className="flex justify-between p-4 text-base font-medium uppercase text-[#4361ee]">
              <span>Thursday</span>
              <span>10 - 11 am</span>
            </li>
            <li className="flex justify-between p-4 text-base font-medium uppercase text-[#4361ee]">
              <span>Friday</span>
              <span>10 - 11 am</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SchedulesCard;
