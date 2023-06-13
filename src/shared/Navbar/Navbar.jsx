import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

import { FaAlignLeft, FaAlignRight } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );
  const [isOpen, setIsOpen] = useState(true);
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();

  const themeToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  // signing out user

  const userSignOut = () => {
    userLogOut().then(() => {
      navigate('/');
    });
  };

  // const userNotification = () => {
  //   if (!user) {
  //     toast.warn('You are not logged in', {
  //       position: 'top-center',
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //     });
  //   }
  // };

  const commonOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `border-b border-b-[#5a189a] text-[#4361ee] p-1`
              : `border-0 text-[#5a189a] p-1`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? `border-b border-b-[#5a189a] text-[#4361ee] p-1`
              : `border-0 text-[#5a189a] p-1`
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? `border-b border-b-[#5a189a] text-[#4361ee] p-1`
              : `border-0 text-[#5a189a] p-1`
          }
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `border-b border-b-[#5a189a] text-[#4361ee] p-1`
                  : `border-0 text-[#5a189a] p-1`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const themeBtn = (
    <>
      <li className="text-[#5a189a]">
        <label className="swap swap-rotate pt-2">
          {/* this hidden checkbox controls the state */}
          <input onClick={themeToggle} type="checkbox" className="" />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
    </>
  );

  return (
    <nav className="bg-[#f8f9fa] shadow-md sticky top-0 rounded-b-md pb-2 md:py-2 z-20">
      {/* <nav className="sticky top-0 rounded-b-md pb-2 md:py-2 z-20"> */}
      <div className="relative container px-1 md:px-3 mx-auto flex justify-between items-center">
        <ul className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-3 z-10">
          {/* <ul className=""> */}
          <li className="text-[#5a189a] font-bold italic font-[archivo] md:text-2xl">
            <Link to="/">Sprache </Link>
          </li>
        </ul>
        {/* mobile menu */}
        <div className="md:hidden pt-2">
          <button
            className=" md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              // setHandleInput(true);
            }}
          >
            <>
              {isOpen ? (
                <FaAlignRight className="text-[#5a189a] w-5 h-5" />
              ) : (
                <FaAlignLeft className="text-[#5a189a] w-5 h-5" />
              )}
            </>
          </button>
          <ul
            className={
              isOpen
                ? `w-fit right-0 -top-72 absolute md:relative flex flex-col md:flex-row justify-center gap-4 md:gap-3 font-medium z-30`
                : `w-full absolute right-0 md:shadow-none shadow-lg top-8 md:top-0 text-right bg-[#f8f9fa] md:bg-transparent rounded-b-md md:relative flex flex-col md:flex-row justify-center gap-3 md:gap-3 font-medium p-3 z-30`
            }
          >
            {commonOptions}
            <div className="md:hidden">
              <ul className="flex flex-col gap-3 md:gap-3 justify-center font-medium">
                {user ? (
                  <span className="flex justify-end md:justify-normal items-center gap-3">
                    <li className="text-[#5a189a]">
                      <img
                        className="w-6 h-6 rounded-full "
                        src={user?.photoURL}
                        alt=""
                      />
                    </li>
                    <li className="text-[#5a189a]">
                      <button onClick={userSignOut}>Sign out</button>
                    </li>
                  </span>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                          isActive
                            ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
                            : `border-0 text-[#5a189a] p-1`
                        }
                      >
                        Sign In
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/sign-up"
                        className={({ isActive }) =>
                          isActive
                            ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
                            : `border-0 text-[#5a189a] p-1`
                        }
                      >
                        Sign Up
                      </NavLink>
                    </li>
                  </>
                )}
                {themeBtn}
              </ul>
            </div>
          </ul>
        </div>
        {/* desktop menu */}
        <div className="hidden md:inline-flex">
          <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-3 font-medium">
            {commonOptions}
          </ul>
        </div>
        <ul className="hidden md:flex md:flex-row justify-center items-center gap-3 font-medium">
          {user ? (
            <span className="flex items-center gap-3">
              <li className="text-[#5a189a]">
                <img
                  className="w-10 h-10 rounded-full "
                  src={user?.photoURL}
                  alt=""
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  data-tooltip-place="top"
                />
              </li>
              <li className="text-[#5a189a]">
                <button onClick={userSignOut}>Sign out</button>
              </li>
            </span>
          ) : (
            <>
              <li>
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
                      : `border-0 text-[#5a189a] p-1`
                  }
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sign-up"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
                      : `border-0 text-[#5a189a] p-1`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
          {themeBtn}
        </ul>
      </div>

      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default Navbar;
