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
import ManageUsers from '../../pages/Dashboard/ManageUsers/ManageUsers';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ManageClasses from '../../pages/Dashboard/ManageClasses/ManageClasses';
import AddClass from '../../pages/Dashboard/AddClass/AddClass';
import MyClasses from '../../pages/Dashboard/MyClasses/MyClasses';
import AdminRoute from '../AdminRoute/AdminRoute';
import Classes from '../../pages/Classes/Classes';

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
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/manage-classes',
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manage-users',
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/add-class',
        element: <AddClass />,
      },
      {
        path: '/dashboard/my-classes',
        element: <MyClasses />,
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
