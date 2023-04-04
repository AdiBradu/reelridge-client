// router
import { useLocation } from 'react-router-dom';

export const usePagePathname = (pathname: string) => {
  const location = useLocation();
  const isPagePathname = location.pathname === pathname;

  return { isPagePathname };
};
