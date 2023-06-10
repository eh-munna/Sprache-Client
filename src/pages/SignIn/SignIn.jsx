import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitleChange from '../../TitleChange/TitleChange';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const SignIn = () => {
  useTitleChange('Sprache || Sign In');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { userSignIn, googlePopUp } = useContext(AuthContext);

  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const userLogIn = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // signing in a new user with email password

    userSignIn(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          setError('User not found');
          return;
        }
        if (errorCode === 'auth/wrong-password') {
          setError('Wrong password');
          return;
        }
      });
  };

  // google popup and login

  const googleLogin = () => {
    googlePopUp()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/popup-closed-by-user') {
          setError('You have declined to sign in');
          return;
        }
        if (errorCode === 'auth/operation-not-allowed') {
          setError('Operation not allowed');
          return;
        }
      });
  };

  return (
    <div>
      <div className="my-6 md:my-16 w-full md:w-2/3 flex md:flex-none flex-col justify-center items-center md:justify-normal md:items-start mx-auto">
        <h1 className="font-[archivo] md:text-left text-[#5a189a] text-4xl font-bold pb-4">
          Sign In!!!
        </h1>

        <p className="text-red-500 text-center md:text-left text-xl font-[roboto] py-2">
          {error}
        </p>
        <form
          onSubmit={userLogIn}
          className="w-10/12 mx-auto md:mx-0 md:w-10/12 font-[roboto] space-y-4"
        >
          <div>
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full md:w-2/3 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2"
            />
          </div>
          <div className="flex relative -z-10">
            <input
              required
              type={!showPassword ? 'password' : 'text'}
              name="password"
              placeholder="Your Password"
              className="w-full md:w-2/3 placeholder:text-[#4361ee] border-b border-b-[#4361ee] focus:outline-none focus:border-b-[#3c096c] text-[#4361ee] p-2 pr-6"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-0 top-1/3 md:right-1/3 md:top-1/3 pr-2"
            >
              {!showPassword ? (
                <FaEye className="text-[#4361ee]" />
              ) : (
                <FaEyeSlash className="text-[#4361ee]" />
              )}
            </span>
          </div>

          <div>
            <button
              type="submit"
              className="w-full md:w-fit font-[roboto] bg-[#7371fc] rounded-full py-1 hover:bg-[#3c096c] px-4 text-base md:text-lg text-[#fff]"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="w-10/12 md:w-2/3 mx-auto md:mx-0 my-3 flex flex-col gap-2 md:gap-2">
          <h3 className="text-[#4361ee] font-[roboto]">Or </h3>
          <button
            type="button"
            onClick={googleLogin}
            className="w-full md:w-fit font-[roboto] bg-[#7371fc] rounded-full py-1 px-4 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]"
          >
            Sign in with Google
          </button>
        </div>
        <p className="text-[#4361ee] font-[roboto] text-left">
          Don&apos;t have an account?{' '}
          <Link className="text-[#480ca8] underline" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
