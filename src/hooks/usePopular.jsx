import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const usePopular = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: popular = [] } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/popular`);
      return res.data;
    },
  });

  return [popular];
};

export default usePopular;
