import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../api/hooks/hooks';

export const PrivateRoutes: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
