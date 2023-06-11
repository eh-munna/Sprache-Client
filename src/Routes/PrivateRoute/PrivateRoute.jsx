import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div>
        <progress className="mx-auto progress w-full bg-[#0077b6]"></progress>
      </div>
    );

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
