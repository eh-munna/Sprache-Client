import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useInstructor from '../../hooks/useInstructor';

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <div>
        <progress className="mx-auto progress w-full bg-[#0077b6]"></progress>
      </div>
    );
  }
  if (user && !isInstructor) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default InstructorRoute;
