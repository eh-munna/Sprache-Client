import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosSecure('/users');
      return response.data;
    },
  });
  return [users, refetch];
};

export default useLoadUsers;
