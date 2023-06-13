import Heading from '../../../components/Heading';
import usePopular from '../../../hooks/usePopular';
import InstructorCard from './InstructorCard/InstructorCard';

const PopularInstructor = () => {
  const [popular] = usePopular();

  return (
    <div className="pt-6 pb-0 md:pt-20 md:pb-0">
      <Heading>{`Meet our teachers`}</Heading>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
        {popular.map((classItem) => (
          <InstructorCard
            key={classItem._id}
            classItem={classItem}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
