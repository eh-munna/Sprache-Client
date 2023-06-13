import useTitleChange from '../../TitleChange/TitleChange';
import Heading from '../../components/Heading';
import useLoadClasses from '../../hooks/useLoadClasses';
import SIngleInstructor from './SingleInstructor/SIngleInstructor';

const Instructors = () => {
  const [classes] = useLoadClasses();

  useTitleChange('Sprache | Instructors');
  return (
    <div className="pt-6 pb-0 md:pt-20 md:pb-0">
      <h4 className="capitalize text-center text-[#480ca8] text-xl font-medium font-archivo pb-4">
        About Us
      </h4>
      <Heading>The language teaching experts</Heading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((singleClass) => (
          <SIngleInstructor
            key={singleClass._id}
            singleClass={singleClass}
            className="rounded-lg"
          ></SIngleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
