import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useAuth from './useAuth';

const useAxiosSecure = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();
  let axiosSecure;

  axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
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
          // userLogOut();
          // navigate('/sign-in');
        }
        return Promise.reject(error);
      }
    );
  }, [userLogOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
