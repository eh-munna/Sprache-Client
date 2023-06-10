import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Footer = () => {
  const { user } = useContext(AuthContext);

  const userNotification = () => {
    if (!user) {
      toast.warn('You are not logged in', {
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
  };

  return (
    <footer className="font-[roboto] bg-[#f8f9fa] py-6 md:py-16 shadow-inner">
      <div className="container px-4 py- mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
          {/* social links */}
          <div className="pt-3 md:pt-0 space-y-3">
            <h3 className="text-[#5a189a]  font-bold font-[archivo] text-xl md:text-2xl pb-2.5 md:pb-4">
              <Link to="/">Sprache</Link>
            </h3>
            <div className=" text-[#4361ee] font-[roboto] text-lg pb-4">
              Unlock the world through language at{' '}
              <span className="text-[#480ca8] font-bold">Sprache</span>, where
              communication knows no boundaries
            </div>

            <ul className="flex items-center gap-3">
              <li className="text-[#5a189a] font-bold font-[roboto] border border-[#4361ee] rounded-full p-2 hover:bg-[#4361ee] hover:text-[#fff]">
                <Link to="https://www.facebook.com/" className="">
                  <FaFacebookF className="md:w-5 md:h-5"></FaFacebookF>
                </Link>
              </li>
              <li className="text-[#5a189a] font-bold font-[roboto] border border-[#4361ee] rounded-full p-2 hover:bg-[#4361ee] hover:text-[#fff]">
                <Link to="https://www.instagram.com/" className="">
                  <FaInstagram className="md:w-5 md:h-5"></FaInstagram>
                </Link>
              </li>
              <li className="text-[#5a189a] font-bold font-[roboto] border border-[#4361ee] rounded-full p-2 hover:bg-[#4361ee] hover:text-[#fff]">
                <Link to="https://twitter.com/" className="">
                  <FaTwitter className="md:w-5 md:h-5"></FaTwitter>
                </Link>
              </li>
              <li className="text-[#5a189a] font-bold font-[roboto] border border-[#4361ee] rounded-full p-2 hover:bg-[#4361ee] hover:text-[#fff]">
                <Link to="https://www.youtube.com/" className="">
                  <FaYoutube className="md:w-5 md:h-5"></FaYoutube>
                </Link>
              </li>
            </ul>
          </div>
          {/* website realted links */}

          <div className="pt-3 md:pt-0">
            <h3 className="text-[#5a189a] font-bold font-[archivo] text-xl md:text-2xl pb-1 md:pb-4">
              Explore
            </h3>
            <ul className="flex flex-row md:flex-col gap-1 md:gap-3 md:justify-center">
              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b p-1 border-b-[#5a189a] text-[#4361ee]`
                      : `border-0 text-[#4361ee]`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                <NavLink
                  to="/all-toys"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b p-1 border-b-[#5a189a] text-[#4361ee]`
                      : `border-0 text-[#4361ee]`
                  }
                >
                  Instructors
                </NavLink>
              </li>
              {user && (
                <>
                  <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                    <NavLink
                      to="/add-toy"
                      className={({ isActive }) =>
                        isActive
                          ? `border-b p-1 border-b-[#4361ee] text-[#5a189a]`
                          : `border-0 text-[#5a189a]`
                      }
                    >
                      Add Toy
                    </NavLink>
                  </li>

                  <li
                    onClick={userNotification}
                    className="text-[#0077b6] font-medium font-[roboto] p-1"
                  >
                    <NavLink
                      to="/my-toys"
                      className={({ isActive }) =>
                        isActive
                          ? `border-b p-1 border-b-[#5a189a] text-[#4361ee]`
                          : `border-0 text-[#4361ee]`
                      }
                    >
                      My Toys
                    </NavLink>
                  </li>
                </>
              )}
              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b p-1 border-b-[#5a189a] text-[#4361ee]`
                      : `border-0 text-[#4361ee]`
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>

          {/* store address */}
          <div className="pt-3 md:pt-0">
            <h3 className="text-[#5a189a]  font-bold font-[archivo] text-xl md:text-2xl pb-1 md:pb-4">
              Find us
            </h3>
            <ul className="flex flex-col  gap-1 justify-center">
              <li className="text-[#4361ee] font-medium font-[roboto] p-1">
                Oberfeldstraße 123
              </li>
              <li className="text-[#4361ee] font-medium font-[roboto] p-1">
                12345 Berlin
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 text-[#4361ee] flex md:items-center justify-center flex-col">
          <p>
            {' '}
            &copy; {new Date().getFullYear()},{' '}
            <span className="">
              <Link className="hover:text-[#5a189a] hover:underline" to="/">
                Sprache
              </Link>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
