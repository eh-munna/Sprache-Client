import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useBooked = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: booked = [], refetch } = useQuery({
    queryKey: ['booked', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked?email=${user?.email}`);
      return res.data;
    },
  });
  return [booked, refetch];
};

export default useBooked;
