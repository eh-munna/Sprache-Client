const EnrolledClassRow = ({ idx, enrolled, refetch }) => {
  refetch();
  const { courseName } = enrolled;
  return (
    <div className="grid grid-cols-2 pt-6 gap-3">
      <div className="flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {idx + 1}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="capitalize font-roboto font-medium text-[#4361ee]">
          {courseName}
        </p>
      </div>
    </div>
  );
};

export default EnrolledClassRow;
