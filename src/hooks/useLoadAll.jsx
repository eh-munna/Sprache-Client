import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadAll = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-classes`);
      return res?.data;
    },
  });

  return [allClasses, refetch];
};

export default useLoadAll;
