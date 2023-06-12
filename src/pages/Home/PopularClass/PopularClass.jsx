import usePopular from '../../../hooks/usePopular';
import PopularCard from './PopularCard/PopularCard';

const PopularClass = () => {
  const [popular] = usePopular();
  console.log(popular);

  return (
    <div className="py-6 md:py-16">
      <h2 className="font-bold font-archivo text-2xl uppercase text-center pb-8 text-[#480ca8]">
        Populer Classes
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
        {popular.map((classItem) => (
          <PopularCard key={classItem._id} classItem={classItem}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
