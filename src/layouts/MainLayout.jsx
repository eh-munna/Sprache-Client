import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4 pb-2 md:pb-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
