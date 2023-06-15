import Heading from '../../components/Heading';
import useLoadAll from '../../hooks/useLoadAll';
import useTitleChange from '../../TitleChange/TitleChange';
import SingleClassCard from './SingleClassCard/SingleClassCard';
// import useUser from '../../hooks/useUser';
// import useUser from '../../hooks/useUser';

const Classes = () => {
  const [allClasses, refetch] = useLoadAll();

  useTitleChange('Sprache | Classes');
  return (
    <div className="pt-6 pb-0 md:pt-20 md:pb-0">
      <h4 className="capitalize text-center text-[#480ca8] text-xl font-medium font-archivo pb-4">
        Courses
      </h4>
      <Heading>Choose a program that suits you</Heading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allClasses?.map((singleClass) => (
          <SingleClassCard
            key={singleClass._id}
            singleClass={singleClass}
            // disabled={disabled}
            className="rounded-lg"
            refetch={refetch}
          ></SingleClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
