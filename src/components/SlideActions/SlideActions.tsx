import React, { useState, useEffect } from 'react';
// components
import { ButtonAdd } from '../Buttons/ButtonAdd/ButtonAdd';
import { ButtonRemove } from '../Buttons/ButtonRemove/ButtonRemove';
import { ButtonLogin } from '../Buttons/ButtonLogin/ButtonLogin';
import { Caption } from '../Typography/Caption';
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
  const [titles, setTitles] = useState<(string | undefined)[]>([]);

  useEffect(() => {
    const titles = watchLaterMovies.map((movie) => movie.title);
    setTitles(titles);
  }, [watchLaterMovies]);

  return (
    <ActionsWrapper className="hovered">
      <Actions>
        {isLoggedIn &&
        location.pathname !== '/watchlater' &&
        !titles.includes(movie.title) ? (
          <ButtonAdd movies={movies} activeSlide={activeSlide} />
        ) : isLoggedIn && location.pathname === '/watchlater' ? (
          <ButtonRemove />
        ) : isLoggedIn &&
          location.pathname !== '/watchlater' &&
          titles.includes(movie.title) ? (
          <Caption text={'saved'} />
        ) : (
          <ButtonLogin />
        )}
      </Actions>
    </ActionsWrapper>
  );
};

export const MemoizedSlideActions = React.memo(SlideActions);
