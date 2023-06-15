import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useInstructorClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: instructorClass, refetch } = useQuery({
    queryKey: ['instructorClass', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructor-class/${user?.email}`);
      return res.data;
    },
  });
  return [instructorClass, refetch];
};

export default useInstructorClass;
