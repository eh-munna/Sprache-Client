import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useEnrolled = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolled = [], refetch } = useQuery({
    queryKey: ['enrolled', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
      return res.data;
    },
  });
  return [enrolled, refetch];
};

export default useEnrolled;
