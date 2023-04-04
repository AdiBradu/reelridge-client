// redux
import { useAppSelector, useAppDispatch } from '../api/hooks/hooks';
// react query
import { useMutation } from 'react-query';
// api
import { removeFromWatchLater } from '../api/features/watchlater/index';
import { setWatchLaterMovies } from '../api/features/watchlater/watchLaterSlice';
import { setActiveSlideWatchLaterMovies } from '../api/features/movie/movieSlice';
// utils
import { filterMoviesById, filterMoviesByIndex } from '../utils/utils';

export const useRemoveFromWatchLater = () => {
  console.log('useRemoveFromWatchLater render');
  const dispatch = useAppDispatch();
  const { activeSlideWatchLaterMovies } = useAppSelector((state) => state.movie);
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);
  const removeFromWatchLaterMutation = useMutation((id: number | undefined) =>
    removeFromWatchLater(id),
  );

  const handleRemoveFromWatchLater = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const id = filterMoviesByIndex(watchLaterMovies, activeSlideWatchLaterMovies);

    removeFromWatchLaterMutation.mutate(id);

    const filteredMovies = filterMoviesById(
      watchLaterMovies,
      activeSlideWatchLaterMovies,
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
