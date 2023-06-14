import Heading from '../../../components/Heading';
import { get, useForm } from 'react-hook-form';

import useGetInstructor from '../../../hooks/useGetInstructor';
const AddClass = () => {
  const [getInstructor] = useGetInstructor();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const addClass = (data) => {
    // const { courseName, classImg, availableSeats, price, instructorName, instructorEmail } = data;
    console.log(data);
  };

  return (
    <div>
      <Heading>Add a class</Heading>

      <div className="mx-auto text-center">
        <form
          onSubmit={handleSubmit(addClass)}
          className="font-[roboto] space-y-4 w-full"
        >
          <div>
            <input
              type="text"
              {...register('courseName', { required: true })}
              placeholder="Course Name"
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          {errors.courseName && (
            <p className="text-red-500">This field is required</p>
          )}
          <div>
            <input
              type="url"
              {...register('classImg', { required: true })}
              placeholder="Valid image URL for course"
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          <div>
            <input
              readOnly
              defaultValue={getInstructor?.name}
              {...register('instructorName', {
                instructorName: getInstructor?.name,
              })}
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          <div>
            <input
              readOnly
              defaultValue={getInstructor?.instructorEmail}
              {...register('instructorEmail', {
                instructorEmail: getInstructor?.instructorEmail,
              })}
              className=" w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          <div>
            <input
              type="number"
              min="1"
              {...register('availableSeats', { required: true })}
              placeholder="Available Seats"
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          {errors.availableSeats && (
            <p className="text-red-500">This field is required</p>
          )}
          <div>
            <input
              type="number"
              min="1"
              {...register('price', { required: true })}
              placeholder="Course Price"
              className=" w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          {errors.price && (
            <p className="text-red-500">This field is required</p>
          )}

          {/* submitting-form */}

          <div className="text-center">
            <button
              type="submit"
              className="mx-auto w-2/4 font-[roboto] bg-[#7371fc] rounded-full py-1 px-4 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;

/* "courseName": "Intermediate German",
    "instructorName": "Johannes Schmidt",
    "instructorEmail": "johannes.schmidt@example.com",
    "instructorImgUrl": "https://i.ibb.co/5cYfrbP/johannes-schmidt.jpg",
    "availableSeats": 10,
    "price": 250,
    "enrolledStudents": 8,
    "classImg": "https://i.ibb.co/CmtpNs6/class-2.jpg",
    "classDetails": "This course is suitable for students with some basic knowledge of German. Expand your vocabulary, improve your grammar skills, and engage in conversations to enhance your fluency in German." */
