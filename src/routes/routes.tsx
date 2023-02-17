// pages
import { NoPage } from '../pages/404Page/NoPage';
import { UpcomingsPage } from '../pages/UpcomingsPage/UpcomingsPage';
import { WatchLaterPage } from '../pages/WatchLaterPage/WatchLaterPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
// types
import { Routes } from '../types/types';

export const protectedRoutes: Routes[] = [
  {
    path: '/watchlater',
    index: true,
    element: <WatchLaterPage />,
  },
];

export const publicRoutes: Routes[] = [
  {
    path: '*',
    index: true,
    element: <NoPage />,
  },
  {
    path: '/',
    index: true,
    element: <UpcomingsPage />,
  },
  {
    path: '/register',
    index: true,
    element: <RegisterPage />,
  },
  {
    path: '/login',
    index: true,
    element: <LoginPage />,
  },
  {
    path: '/search',
    index: true,
    element: <SearchPage />,
  },
];
