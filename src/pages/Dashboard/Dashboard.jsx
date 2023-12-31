import { Link, Outlet } from 'react-router-dom';
// import Navbar from '../shared/Navbar/Navbar';
import {
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaHome,
  FaPeopleArrows,
  FaSchool,
  FaServer,
  FaUsers,
} from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const commonNavOptions = (
    <>
      <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
        <FaHome />
        <Link to="/">Home</Link>
      </li>
      <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
        <FaPeopleArrows />
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
        <FaSchool />
        <Link to="/classes">Classes</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="container mx-auto px-4 py-2 md:pt-16 grid grid-cols-1 md:grid-cols-7 gap-5">
        <div className="flex flex-col gap-4 col-span-full md:col-span-2 border-[#5a189a] border border-opacity-5 px-3 pt-6 pb-5 shadow-xl rounded-md">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
              <FaServer />
              <Link
                to={
                  isAdmin
                    ? `/dashboard/admin-home`
                    : isInstructor
                    ? `/dashboard/instructor-home`
                    : `/dashboard/user-home`
                }
              >
                Dashboard
              </Link>
            </li>
            {isAdmin ? (
              <>
                <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
                  <FaBookReader />
                  <Link to="/dashboard/manage-classes">Manage Classes</Link>
                </li>
                <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
                  <FaUsers />
                  <Link to="/dashboard/manage-users">Manage Users</Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
                  <FaBookReader />
                  <Link to="/dashboard/add-class">Add Class</Link>
                </li>
                <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
                  <FaUsers />
                  <Link to="/dashboard/my-classes">My Classes</Link>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
                  <FaBook />
                  <Link to="/dashboard/my-selected-classes">
                    My Selected Classes
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
                  <FaBookOpen />
                  <Link to="/dashboard/my-enrolled-classes">
                    My Enrolled Classes
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
                  <MdPayment />
                  <Link to="/dashboard/payment-history">Payment History</Link>
                </li>
              </>
            )}
          </ul>
          <div className="border border-b-[#5a189a] border-opacity-5"></div>
          <ul className="flex flex-col gap-5">{commonNavOptions}</ul>
        </div>
        <div className="col-span-full md:col-span-5 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
