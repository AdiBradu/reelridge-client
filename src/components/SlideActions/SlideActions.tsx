import { memo } from 'react';
// components
import { Caption } from '../Typography/Caption';
import { MemoizedButtonAdd } from '../Buttons/ButtonAdd/ButtonAdd';
import { MemoizedButtonRemove } from '../Buttons/ButtonRemove/ButtonRemove';
import { MemoizedButtonLoginSlideAction } from '../Buttons/ButtonLogin/ButtonLoginSlideAction';
// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
// redux
import { useAppSelector } from '../../api/hooks/hooks';
// router
import { useLocation } from 'react-router-dom';
// types
import { MovieProps } from '../../types/types';
// utils
import { includesTitle } from '../../utils/utils';

const ActionsWrapper = styled(Stack)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  justifyContent: 'flex-end',
  zIndex: '2000',
}));

const Actions = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '33%',
  backgroundColor: theme.palette.secondary.main900,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.9,
}));

export const SlideActions: React.FC<MovieProps> = ({ movie }) => {
  console.log('SlideActions render');

  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);
  const location = useLocation();
  const isWatchlaterPage = location.pathname === '/watchlater';
  const titles = watchLaterMovies.map((movie) => movie.title);

  return (
    <ActionsWrapper className="hovered">
      <Actions>
        {isLoggedIn && !isWatchlaterPage && !includesTitle(titles, movie?.title) ? (
          <MemoizedButtonAdd movie={movie} />
        ) : isLoggedIn && isWatchlaterPage ? (
          <MemoizedButtonRemove />
        ) : isLoggedIn && !isWatchlaterPage && includesTitle(titles, movie?.title) ? (
          <Caption text={'saved'} />
        ) : (
          <MemoizedButtonLoginSlideAction />
        )}
      </Actions>
    </ActionsWrapper>
  );
};

export const MemoizedSlideActions = memo(SlideActions);
