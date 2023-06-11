import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import ErrorPage from '../../shared/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import Instructors from '../../pages/Instructors/Instructors';
import Dashboard from '../../pages/Dashboard/Dashboard';
import DashboardLayout from '../../layouts/DashboardLayout';
import MySelectedClasses from '../../pages/Dashboard/MySelectedClasses/MySelectedClasses';
import MyEnrolledClasses from '../../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/instructors',
        element: <Instructors />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/my-selected-classes',
        element: <MySelectedClasses />,
      },
      {
        path: '/dashboard/my-enrolled-classes',
        element: <MyEnrolledClasses />,
      },
    ],
  },
]);

export default router;
