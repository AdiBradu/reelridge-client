import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../api/hooks/hooks';

export const PrivateRoutes: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  console.log('logged in', isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
