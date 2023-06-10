import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitleChange from '../../TitleChange/TitleChange';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useTitleChange('Sprache || Sign Up');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { createUser, userLogOut } = useContext(AuthContext);
  const navigation = useNavigate();

  // creating a new user with email and password
  const userSignUp = (data) => {
    const { name, email, password, confirmPassword, photoUrl } = data;

    if (email && password) {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          userUpdate(createdUser, name, photoUrl);
          toast.success('User is successfully created', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          userSignOut();
          navigation('/sign-in');
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            toast.error('Email is already used', {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
            setError(true);
            return;
          }
        });
    }

    // updating the user

    const userUpdate = (currentUser, name, photoUrl) => {
      updateProfile(currentUser, {
        displayName: name,
        photoURL: photoUrl,
      }).then(() => {});
    };

    // user logout

    const userSignOut = () => {
      userLogOut().then(() => {});
    };
  };

  // resetting the form
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      if (error) {
        reset({
          ...getValues(),
        });
      }
      reset();
    }
  }, [error, formState, getValues, reset]);

  return (
    <div className="my-6 md:my-16 w-full md:w-2/3 mx-auto">
      <h1 className="font-[archivo] text-center md:text-left text-[#5a189a] text-4xl font-bold pb-4">
        Sign Up Here!!!
      </h1>

      <form
        onSubmit={handleSubmit(userSignUp)}
        className="w-10/12 mx-auto md:mx-0 md:w-10/12 font-[roboto] space-y-4"
      >
        <div>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Your Name"
            className="w-full md:w-2/3 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
          />
        </div>
        {errors.name && <p className="text-red-500">This field is required</p>}
        <div>
          <input
            required
            type="email"
            {...register('email')}
            placeholder="Your Email"
            className="w-full md:w-2/3 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
          />
        </div>
        <div className="flex relative -z-10 md:z-0">
          <input
            required
            type={!showPassword ? 'password' : 'text'}
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/,
            })}
            placeholder="Your Password"
            className="w-full md:w-2/3 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2 pr-8"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-0 top-1/3 md:right-1/3 md:top-1/3 mr-2"
          >
            {!showPassword ? (
              <FaEye className="text-[#4361ee]" />
            ) : (
              <FaEyeSlash className="text-[#4361ee]" />
            )}
          </span>
        </div>
        <div className="flex relative -z-10 md:z-0">
          <input
            required
            type={!showPassword ? 'password' : 'text'}
            // {...register('confirmPassword', {
            //   required: true,
            //   validate: (val: string) => {
            //     if (watch('password') != val) {
            //       return 'Passwords do not match';
            //     }
            //   },
            // })}
            placeholder="Confirm Your Password"
            className="w-full md:w-2/3 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2 pr-8"
          />

          <span
            onClick={() => setShowPassword2(!showPassword2)}
            className="cursor-pointer absolute right-0 top-1/3 md:right-1/3 md:top-1/3 mr-2"
          >
            {!showPassword2 ? (
              <FaEye className="text-[#4361ee]" />
            ) : (
              <FaEyeSlash className="text-[#4361ee]" />
            )}
          </span>
        </div>
        <>
          {errors.password?.type === 'required' && (
            <p className="text-red-500">Please provide password</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="text-red-500">Password must be 6 characters long</p>
          )}
          {errors.password?.type === 'maxLength' && (
            <p className="text-red-500">
              Password should be 20 characters less
            </p>
          )}
          {errors.password?.type === 'pattern' && (
            <p className="text-red-500">
              Password must have one capital letter and one special character
            </p>
          )}
        </>
        <div>
          <input
            required
            type="url"
            {...register('photoUrl')}
            placeholder="Please enter a valid URL"
            className="w-full md:w-2/3 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full md:w-fit font-[roboto] bg-[#7371fc] rounded-full py-1 px-4 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
          >
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-[#4361ee] font-[roboto]">
            Already have an account?{' '}
            <Link className="text-[#480ca8] underline" to="/sign-in">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
