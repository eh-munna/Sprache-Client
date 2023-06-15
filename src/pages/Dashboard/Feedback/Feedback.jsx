import { useLocation } from 'react-router-dom';
import { get, useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Feedback = () => {
  const location = useLocation();
  const singleClass = location?.state;
  const [axiosSecure] = useAxiosSecure();
  const { _id } = singleClass;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const addFeedback = (data) => {
    const { feedback } = data;

    axiosSecure.patch(`/add-feedback/${_id}`, { feedback }).then((res) => {
      if (res.data.modifiedCount) {
        toast.success('Feedback is added', {
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

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, getValues, reset]);

  return (
    <div>
      <Heading>Add a feedback</Heading>

      <div className="mx-auto text-center">
        <form
          onSubmit={handleSubmit(addFeedback)}
          className="font-[roboto] space-y-4 w-full"
        >
          <div>
            <textarea
              placeholder="Message"
              className="w-full md:w-3/4 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
              {...register('feedback', { required: true })}
              id=""
              cols="20"
              rows="5"
            ></textarea>
          </div>
          {errors.feedback && (
            <p className="text-red-500">Please provide classs details</p>
          )}

          {/* submitting-form */}

          <div className="text-center">
            <button
              type="submit"
              className="mx-auto w-2/4 font-[roboto] bg-[#7371fc] rounded-full py-1 px-4 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
            >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
