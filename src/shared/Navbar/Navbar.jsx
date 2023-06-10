import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
// import { toast } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../providers/AuthProvider';
import { FaAlignLeft, FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, userLogOut, handleInput, setHandleInput } =
    useContext(AuthContext);
  const navigate = useNavigate();

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
              ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
              : `border-0 text-[#5a189a] p-1`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-toys"
          className={({ isActive }) =>
            isActive
              ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
              : `border-0 text-[#5a189a] p-1`
          }
        >
          Instructors
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-toy"
              className={({ isActive }) =>
                isActive
                  ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
                  : `border-0 text-[#5a189a] p-1`
              }
            >
              Add Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-toys"
              className={({ isActive }) =>
                isActive
                  ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
                  : `border-0 text-[#5a189a] p-1`
              }
            >
              My Toys
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? `border-b border-b-[#4361ee] text-[#5a189a] p-1`
              : `border-0 text-[#5a189a] p-1`
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#f8f9fa] shadow-md sticky top-0 rounded-b-md pb-2 md:py-2">
      <div className="relative container px-1 md:px-3 mx-auto flex justify-between items-center">
        <ul className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-3 z-10">
          {/* <ul className=""> */}
          <li>
            <Link to="/">
              {/* <img className="max-w-full h-12 md:h-16" src={logo} alt="" /> */}
            </Link>
          </li>
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
              setHandleInput(!handleInput);
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
                : `w-full absolute right-0 md:shadow-none shadow-lg top-12 md:top-0 text-right bg-[#f8f9fa] md:bg-transparent rounded-b-md md:relative flex flex-col md:flex-row justify-center gap-3 md:gap-3 font-medium p-3 z-30`
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
              </ul>
            </div>
          </ul>
        </div>
        {/* desktop menu */}
        <div className="hidden md:inline-flex">
          <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-3 font-medium">
            {commonOptions}
            <div className="md:hidden">
              <ul className="flex flex-col gap-3 md:gap-3 justify-center font-medium">
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
              </ul>
            </div>
          </ul>
        </div>
        <ul className="hidden md:flex md:flex-row justify-center gap-3 font-medium">
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
        </ul>
      </div>

      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default Navbar;
