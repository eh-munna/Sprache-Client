import { motion } from 'framer-motion';

const PopularCard = ({ classItem }) => {
  const {
    courseName,
    instructorName,
    availableSeats,
    price,
    enrolledStudents,
    classImg,
  } = classItem;

  return (
    <>
      <div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=""
        >
          <div className="">
            <img className="max-w-full rounded-md" src={classImg} alt="" />
          </div>
          <div className="rounded-b-md p-2">
            <h3 className="text-xl font-bold font-[archivo] text-[#5a189a]">
              {courseName}
            </h3>
            <p className="text-[#4361ee] font-[roboto] font-medium">
              {' '}
              Number of student : {enrolledStudents}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PopularCard;
