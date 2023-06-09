import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitleChange from '../../TitleChange/TitleChange';

const SignIn = () => {
  useTitleChange('Legowelt || Sign In');
  const [error, setError] = useState('');
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
    <div className="my-6 md:my-16 w-full md:w-2/3 mx-auto">
      <h1 className="font-[archivo] text-center md:text-left text-[#0077b6] text-4xl font-bold pb-4">
        Sign In Here!!!
      </h1>

      <p className="text-red-500 text-center md:text-left text-xl font-[roboto] py-2">
        {error}
      </p>
      <form
        onSubmit={userLogIn}
        className="w-10/12 mx-auto md:mx-0 md:w-2/3 font-[roboto] space-y-4"
      >
        <div>
          <input
            required
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>
        <div>
          <input
            required
            type="text"
            name="password"
            id=""
            placeholder="Your Password"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full md:w-fit font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="w-10/12 mx-auto md:mx-0 my-3 flex flex-col gap-2 md:gap-2 md:flex-row items-center">
        <h3 className="text-[#0077b6] font-[roboto]">Or You can... </h3>
        <button
          type="button"
          onClick={googleLogin}
          className="w-full md:w-fit font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
        >
          Sign in with Google
        </button>
      </div>
      <p className="text-[#00b4d8] font-[roboto]">
        Don&apos;t have an account?{' '}
        <Link className="text-[#0077b6]" to="/sign-up">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
