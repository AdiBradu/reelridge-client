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
    children: [],
  },
];

export const publicRoutes: Routes[] = [
  {
    path: '*',
    element: <NoPage />,
    children: [],
  },
  {
    path: '/',
    index: true,
    element: <UpcomingsPage />,
    children: [],
  },
  {
    path: '/register',
    index: true,
    element: <RegisterPage />,
    children: [],
  },
  {
    path: '/login',
    index: true,
    element: <LoginPage />,
    children: [],
  },
  {
    path: '/search',
    index: true,
    element: <SearchPage />,
    children: [],
  },
];
