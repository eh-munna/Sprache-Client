import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-2 md:py-4 grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-full md:col-span-2 row-span-2 border border-red-400">
          side bar
        </div>
        <div className="col-span-full md:col-span-3 border border-red-800">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
