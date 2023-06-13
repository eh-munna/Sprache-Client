import Heading from '../../components/Heading';
import useLoadClasses from '../../hooks/useLoadClasses';

import useTitleChange from '../../TitleChange/TitleChange';
import SingleClassCard from './SingleClassCard/SingleClassCard';

const Classes = () => {
  const [classes] = useLoadClasses();

  useTitleChange('Sprache | Classes');
  return (
    <div className="pt-6 pb-0 md:pt-20 md:pb-0">
      <h4 className="capitalize text-center text-[#480ca8] text-xl font-medium font-archivo pb-4">
        Courses
      </h4>
      <Heading>Choose a program that suits you</Heading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((singleClass) => (
          <SingleClassCard
            key={singleClass._id}
            singleClass={singleClass}
            className="rounded-lg"
          ></SingleClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
