import { motion } from 'framer-motion';

const InstructorCard = ({ classItem }) => {
  const { instructorName, courseName, instructorImgUrl } = classItem;

  return (
    <>
      <div className="overflow-hidden md:overflow-visible flex flex-col justify-center items-center">
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className=""
        >
          <div className="">
            <img
              className="max-w-full rounded-full w-64 h-64"
              src={instructorImgUrl}
              alt=""
            />
          </div>
          <div className="rounded-b-md p-2 flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold font-[archivo] text-[#5a189a]">
              {instructorName}
            </h3>
            <p className="text-[#4361ee] font-[roboto] font-medium capitalize">
              {courseName} Teacher
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default InstructorCard;
