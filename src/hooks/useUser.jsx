import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import axios from 'axios';
// import axios from 'axios';
// import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../providers/AuthProvider';

const useUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  // const [targetUser, setTargetUser] = useState([]);

  const { data: targetUser = [], refetch } = useQuery({
    queryKey: ['targetUsers', user?.email],
    queryFn: async () => {
      const response = await axios.get(
        `https://sprache-server.vercel.app/users?email=${user?.email}`
      );
      return response.data;
    },
  });

  // useEffect(() => {
  //   fetch(`https://sprache-server.vercel.app/user/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTargetUser(data);
  //     });
  // }, [user?.email]);
  return [targetUser, refetch];
};

export default useUser;
