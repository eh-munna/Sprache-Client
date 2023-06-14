import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useGetInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: getInstructor } = useQuery({
    queryKey: ['getInstructor', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/get-instructor/${user?.email}`);
      return res.data;
    },
  });
  return [getInstructor];
};

export default useGetInstructor;
