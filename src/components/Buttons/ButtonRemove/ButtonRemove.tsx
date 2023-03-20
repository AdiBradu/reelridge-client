import React from 'react';
// components
import { Caption } from '../../Typography/Caption';
// material ui
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutline';
// redux
import { useAppSelector, useAppDispatch } from '../../../api/hooks/hooks';
// react query
import { useMutation } from 'react-query';
// api
import { removeFromWatchLater } from '../../../api/features/watchlater/index';
import { setWatchLaterMovies } from '../../../api/features/watchlater/watchLaterSlice';
import { setActiveSlideWatchLaterMovies } from '../../../api/features/movie/movieSlice';
// types
import { UpcomingProps } from '../../../types/types';

const RemoveItem = styled(RemoveIcon)(({ theme }) => ({
  color: theme.palette.primary.main100,
}));

export const ButtonRemove: React.FC = () => {
  console.log('ButtonRemove render');

  const dispatch = useAppDispatch();
  const { activeSlideWatchLaterMovies } = useAppSelector((state) => state.movie);
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);

  const removeFromWatchLaterMutation = useMutation((movie: number) =>
    removeFromWatchLater(movie),
  );

  const handleRemoveFromWatchLater = () => {
    const newMovie = watchLaterMovies?.filter(
      (movie) => watchLaterMovies.indexOf(movie) === activeSlideWatchLaterMovies,
    );

    removeFromWatchLaterMutation.mutate(newMovie[0].id);

    const filteredMovies = watchLaterMovies.filter(
      (movie: UpcomingProps) =>
        movie.id !== watchLaterMovies[activeSlideWatchLaterMovies].id,
    );

    dispatch(setWatchLaterMovies(filteredMovies));

    dispatch(
      filteredMovies.length === 0
        ? setActiveSlideWatchLaterMovies(0)
        : setActiveSlideWatchLaterMovies(filteredMovies.length - 1),
    );
  };

  return (
    <Button
      onClick={(event) => {
        event.stopPropagation();
        handleRemoveFromWatchLater();
      }}
      aria-label={'Remove movie'}
    >
      <RemoveItem />
      <Caption text={'remove movie'} />
    </Button>
  );
};

export const MemoizedButtonRemove = React.memo(ButtonRemove);
