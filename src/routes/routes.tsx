// pages
import { NoPage } from '../pages/404Page/NoPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { UpcomingPage } from '../pages/UpcomingPage/UpcomingPage';
import { WatchLaterPage } from '../pages/WatchLaterPage/WatchLaterPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
// const UpcomingPage = lazy(() =>
//   import('../pages/UpcomingPage/UpcomingPage').then(({ UpcomingPage }) => ({
//     default: UpcomingPage,
//   })),
// );
// const WatchLaterPage = lazy(() =>
//   import('../pages/WatchLaterPage/WatchLaterPage').then(({ WatchLaterPage }) => ({
//     default: WatchLaterPage,
//   })),
// );
// const SearchPage = lazy(() =>
//   import('../pages/SearchPage/SearchPage').then(({ SearchPage }) => ({
//     default: SearchPage,
//   })),
// );

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
    element: <UpcomingPage />,
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
