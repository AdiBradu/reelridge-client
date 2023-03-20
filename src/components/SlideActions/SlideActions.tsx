import React, { useMemo } from 'react';
// components
import { Caption } from '../Typography/Caption';
import { MemoizedButtonAdd } from '../Buttons/ButtonAdd/ButtonAdd';
import { MemoizedButtonRemove } from '../Buttons/ButtonRemove/ButtonRemove';
import { MemoizedButtonLogin } from '../Buttons/ButtonLogin/ButtonLogin';
// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
// redux
import { useAppSelector } from '../../api/hooks/hooks';
// router
import { useLocation } from 'react-router-dom';
// types
import { SlideActionsProps } from '../../types/types';

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

export const SlideActions: React.FC<SlideActionsProps> = ({
  movies,
  activeSlide,
  movie,
}) => {
  console.log('SlideActions render');

  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);
  const location = useLocation();
  const titles = useMemo(
    () => watchLaterMovies.map((movie) => movie.title),
    [watchLaterMovies],
  );

  return (
    <ActionsWrapper className="hovered">
      <Actions>
        {isLoggedIn &&
        location.pathname !== '/watchlater' &&
        !titles.includes(movie.title) ? (
          <MemoizedButtonAdd movies={movies} activeSlide={activeSlide} />
        ) : isLoggedIn && location.pathname === '/watchlater' ? (
          <MemoizedButtonRemove />
        ) : isLoggedIn &&
          location.pathname !== '/watchlater' &&
          titles.includes(movie.title) ? (
          <Caption text={'saved'} />
        ) : (
          <MemoizedButtonLogin />
        )}
      </Actions>
    </ActionsWrapper>
  );
};

export const MemoizedSlideActions = React.memo(SlideActions);
