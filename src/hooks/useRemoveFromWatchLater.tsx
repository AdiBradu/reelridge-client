// types
import { UpcomingProps } from '../types/types';
// redux
import { useAppSelector, useAppDispatch } from '../api/hooks/hooks';
// react query
import { useMutation } from 'react-query';
// api
import { removeFromWatchLater } from '../api/features/watchlater/index';
import { setWatchLaterMovies } from '../api/features/watchlater/watchLaterSlice';
import { setActiveSlideWatchLaterMovies } from '../api/features/movie/movieSlice';

export const useRemoveFromWatchLater = () => {
  console.log('useRemoveFromWatchLater render');

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

  return { handleRemoveFromWatchLater };
};
