import Heading from '../../../components/Heading';
import usePopular from '../../../hooks/usePopular';
import PopularCard from './PopularCard/PopularCard';

const PopularClass = () => {
  const [popular] = usePopular();

  return (
    <div className="pt-6 pb-0 md:pt-16 md:pb-0">
      <Heading>{`Popular Classes`}</Heading>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
        {popular?.map((classItem) => (
          <PopularCard key={classItem._id} classItem={classItem}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
