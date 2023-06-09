import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitleChange from '../../TitleChange/TitleChange';

const SignUp = () => {
  useTitleChange('Legowelt || Sign Up');
  const [error, setError] = useState('');
  const { createUser, userLogOut } = useContext(AuthContext);
  const navigation = useNavigate();

  // creating a new user with email and password
  const userSignUp = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    if (password.length < 6) {
      setError('Password must be or at least 6 characters long');
      return;
    }

    if (email && password) {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          userUpdate(createdUser, name, photoUrl);
          form.reset();
          userSignOut();
          navigation('/sign-in');
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            setError('Email already used');
            return;
          }
        });
    } else {
      setError('Cannot register without providing email and password');
      return;
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

  return (
    <div className="my-6 md:my-16 w-full md:w-2/3 mx-auto">
      {/* error message */}
      <h1 className="font-[archivo] text-center md:text-left text-[#0077b6] text-4xl font-bold pb-4">
        Sign Up Here!!!
      </h1>

      <p className="text-red-500 text-center md:text-left text-xl font-[roboto] py-2">
        {error}
      </p>

      <form
        onSubmit={userSignUp}
        className="w-10/12 mx-auto md:mx-0 md:w-2/3 font-[roboto] space-y-4"
      >
        <div>
          <input
            required
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>
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
          <input
            required
            type="url"
            name="photoUrl"
            id=""
            placeholder="Please enter a valid URL"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full md:w-fit font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
          >
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-[#00b4d8] font-[roboto]">
            Already have an account?{' '}
            <Link className="text-[#0077b6]" to="/sign-in">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
