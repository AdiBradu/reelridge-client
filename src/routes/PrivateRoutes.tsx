import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes: React.FC = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
