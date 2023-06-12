import useLoadClasses from '../../hooks/useLoadClasses';

const Classes = () => {
  const [classes] = useLoadClasses();

  return (
    <div className="font-[roboto] py-6 md:py-16">
      here are {classes.length} classes
    </div>
  );
};

export default Classes;
