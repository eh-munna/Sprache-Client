import { Link, Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { FaBook, FaBookOpen, FaHome, FaServer } from 'react-icons/fa';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-2 md:pt-16 grid grid-cols-1 md:grid-cols-7 gap-5">
        <div className="col-span-full md:col-span-2 border-[#5a189a] border border-opacity-5 px-3 pt-6 pb-0 shadow-xl rounded-md">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
              <FaHome />
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center gap-3 text-[#4361ee] font-medium text-lg font-[roboto]">
              <FaServer />
              <Link to="/dashboard">Dashboard</Link>
            </li>
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
          </ul>
        </div>
        <div className="col-span-full md:col-span-5 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
