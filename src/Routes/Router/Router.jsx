import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import ErrorPage from '../../shared/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import Instructors from '../../pages/Instructors/Instructors';
import MySelectedClasses from '../../pages/Dashboard/MySelectedClasses/MySelectedClasses';
import MyEnrolledClasses from '../../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses';
import ManageUsers from '../../pages/Dashboard/ManageUsers/ManageUsers';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ManageClasses from '../../pages/Dashboard/ManageClasses/ManageClasses';
import AddClass from '../../pages/Dashboard/AddClass/AddClass';
import MyClasses from '../../pages/Dashboard/MyClasses/MyClasses';
import AdminRoute from '../AdminRoute/AdminRoute';
import InstructorRoute from '../InstructorRoute/InstructorRoute';
import Classes from '../../pages/Classes/Classes';
import UserHome from '../../pages/Dashboard/UserHome/UserHome';
import AdminHome from '../../pages/Dashboard/AdminHome/AdminHome';
import Dashboard from '../../pages/Dashboard/Dashboard';
import InstructorHome from '../../pages/Dashboard/InstructorHome/InstructorHome';
import Payment from '../../pages/Dashboard/Payment/Payment';
import PaymentHistory from '../../pages/Dashboard/Payment/PaymentHistory/PaymentHistory';

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
        path: '/instructors',
        element: <Instructors />,
      },
      {
        path: '/classes',
        element: <Classes />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: 'dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // user routes

      {
        path: 'user-home',
        element: <UserHome />,
      },
      {
        path: 'my-selected-classes',
        element: <MySelectedClasses />,
      },
      {
        path: 'my-enrolled-classes',
        element: <MyEnrolledClasses />,
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },

      // admin routes
      {
        path: 'admin-home',
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-classes',
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      // instructor routes

      {
        path: 'instructor-home',
        element: (
          <InstructorRoute>
            <InstructorHome />
          </InstructorRoute>
        ),
      },

      {
        path: 'add-class',
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: 'my-classes',
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
