import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-2 md:p-4">
      <div className="flex flex-col items-center justify-between space-y-8">
        <div className="pt-6 md:pt-12">
          <img
            className="max-w-full rounded-lg shadow-2xl"
            src="https://i.ibb.co/y8h5cgc/46422844.jpg"
            alt=""
          />
        </div>
        <p className="text-lg font-[roboto] text-[#4361ee]">
          The page you are looking for was moved, removed, renamed or might
          never existed
        </p>

        <Link to="/">
          <Button>Let&apos;s go home</Button>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
