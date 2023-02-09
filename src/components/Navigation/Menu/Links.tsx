// components
import { LoginIcon } from '../../../assets/icons/LoginIcon';
import { SearchIcon } from '../../../assets/icons/SearchIcon';
import { UpcomingsIcon } from '../../../assets/icons/UpcomingsIcon';
import { WatchLaterIcon } from '../../../assets/icons/WatchLaterIcon';

export const Links = [
  {
    id: 1,
    name: 'login',
    icon: <LoginIcon />,
    url: '/login',
  },
  {
    id: 2,
    name: 'search',
    icon: <SearchIcon />,
    url: '/search',
  },
  {
    id: 3,
    name: 'upcomings',
    icon: <UpcomingsIcon />,
    url: '/',
  },
  {
    id: 4,
    name: 'watch later',
    icon: <WatchLaterIcon />,
    url: '/watchlater',
  },
];
