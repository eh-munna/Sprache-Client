import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import HomeSlider from '../pages/Home/HomeSlider/HomeSlider';
const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes('instructors') ||
    location.pathname.includes('sign-in') ||
    location.pathname.includes('sign-up') ||
    location.pathname.includes('classes');

  return (
    <div className="">
      <Navbar />
      {!noHeaderFooter && <HomeSlider />}
      <div className="container mx-auto px-4 pb-2 md:pb-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
