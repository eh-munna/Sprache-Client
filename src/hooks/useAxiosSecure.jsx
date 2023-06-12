import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useAuth from './useAuth';

const useAxiosSecure = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();
  let axiosSecure;

  axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your API base URL
  });
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('user-access-token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          userLogOut(); // Call the logout method from your AuthContext
          navigate('/sign-in'); // Navigate to the login page
        }
        return Promise.reject(error);
      }
    );
  }, [userLogOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
