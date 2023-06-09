import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-2 md:p-4">
      <div className="flex flex-col items-center justify-between space-y-8">
        <h1 className="font-[archivo] py-8 md:py-12 text-2xl md:text-4xl font-bold text-[#f77f00]">
          Opps!!!
        </h1>

        <img
          className="max-w-full rounded-lg shadow-2xl"
          src="https://i.ibb.co/TLc9Xmy/error-404.jpg"
          alt=""
        />
        <p className="text-lg text-gray-500">Page not found</p>

        <Link to="/">
          <button className="font-[roboto] bg-[#00b4d8]  rounded-md p-2 text-base md:text-lg text-[#fff]">
            Let&apos;s explore Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
