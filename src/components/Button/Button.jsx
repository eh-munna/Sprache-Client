const Button = ({ children }) => {
  return (
    <button className="font-[roboto] bg-[#7371fc] rounded-full py-1 px-4 hover:bg-[#3c096c] text-base md:text-lg text-[#fff]">
      {children}
    </button>
  );
};

export default Button;
