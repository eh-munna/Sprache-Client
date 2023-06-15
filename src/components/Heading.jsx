const Heading = ({ children }) => {
  return (
    <h2 className="font-bold text-2xl md:text-4xl font-archivo capitalize text-center pb-8 md:pb-12 text-[#480ca8]">
      {children}
    </h2>
  );
};

export default Heading;
