// components
import { LoginIcon } from '../../../assets/icons/LoginIcon';
import { SearchIcon } from '../../../assets/icons/SearchIcon';
import { UpcomingIcon } from '../../../assets/icons/UpcomingIcon';
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
    name: 'upcoming',
    icon: <UpcomingIcon />,
    url: '/',
  },
  {
    id: 4,
    name: 'watch later',
    icon: <WatchLaterIcon />,
    url: '/watchlater',
  },
];
