import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructors`);
      return res.data;
    },
  });
  return [instructors];
};

export default useLoadInstructors;
