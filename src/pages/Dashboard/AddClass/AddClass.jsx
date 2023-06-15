import Heading from '../../../components/Heading';
import { get, useForm } from 'react-hook-form';

import useGetInstructor from '../../../hooks/useGetInstructor';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
const AddClass = () => {
  const [getInstructor] = useGetInstructor();

  const { user } = useAuth();
  const instructorName = getInstructor?.name;
  const instructorEmail = getInstructor?.instructorEmail;
  const {
    register,
    handleSubmit,
    reset,
    formState,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const addClass = (data) => {
    const {
      courseName,
      classImg,
      availableSeats,
      price,
      classDetails,
      instructorImgUrl,
    } = data;

    axios
      .post(`https://sprache-server.vercel.app/add-class`, {
        courseName: courseName,
        classImg: classImg,
        availableSeats: parseFloat(availableSeats),
        price: parseFloat(price),
        instructorName: user?.displayName,
        instructorEmail: user?.email,
        classDetails: classDetails,
        instructorImgUrl: instructorImgUrl,
        enrolledStudents: 0,
        status: 'pending',
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success('One class is added', {
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
  };

  // resetting the form
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, getValues, reset, instructorName, instructorEmail]);

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
            <p className="text-red-500">Please give a name for the course</p>
          )}
          <div>
            <input
              type="url"
              {...register('classImg', { required: true })}
              placeholder="Valid image URL for course"
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          {errors.classImg && (
            <p className="text-red-500">Please enter a valid url</p>
          )}
          <div>
            <input
              type="url"
              {...register('instructorImgUrl', { required: true })}
              placeholder="Valid image URL for instructor profile picture"
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          {errors.instructorImgUrl && (
            <p className="text-red-500">Please enter a valid url</p>
          )}
          <div>
            <input
              readOnly
              defaultValue={user?.displayName}
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          <div>
            <input
              readOnly
              defaultValue={user?.email}
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
            <p className="text-red-500">Please mention available seats</p>
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
          {errors.price && <p className="text-red-500">Price is required</p>}
          <div>
            <textarea
              placeholder="Message"
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
              {...register('classDetails', { required: true })}
              id=""
              cols="20"
              rows="5"
            ></textarea>
          </div>
          {errors.classDetails && (
            <p className="text-red-500">Please provide classs details</p>
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
