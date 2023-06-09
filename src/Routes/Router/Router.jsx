import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import ErrorPage from '../../shared/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';

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
    ],
  },
]);

export default router;
