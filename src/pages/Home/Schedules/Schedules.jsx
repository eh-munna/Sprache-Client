import Heading from '../../../components/Heading';
import useLoadClasses from '../../../hooks/useLoadClasses';
import SchedulesCard from './SchedulesCard/SchedulesCard';

const Schedules = () => {
  const [classes] = useLoadClasses();

  return (
    <div className="pt-6 pb-0 md:pt-20 md:pb-0">
      <Heading>{`weekly schedules`}</Heading>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
        {classes.slice(0, 3).map((item) => (
          <SchedulesCard key={item._id} item={item}></SchedulesCard>
        ))}
      </div>
    </div>
  );
};

export default Schedules;
