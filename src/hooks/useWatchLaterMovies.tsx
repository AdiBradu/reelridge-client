import { useMemo, useEffect } from 'react';
// redux
import { useAppSelector, useAppDispatch } from '../api/hooks/hooks';
// api
import { setActiveSlideWatchLaterMovies } from '../api/features/movie/movieSlice';
import { getWatchlaterMovies } from '../api/features/watchlater';
import { setWatchLaterMovies } from '../api/features/watchlater/watchLaterSlice';
// react query
import { useQuery } from 'react-query';
// hooks
import { useMovie } from './useMovie';
import { useActiveSlide } from './useActiveSlide';

export const useWatchLaterMovies = () => {
  console.log('useWatchLaterMovies render');
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);
  const { activeSlideWatchLaterMovies } = useAppSelector((state) => state.movie);
  console.log(watchLaterMovies);
  const movies = useMemo(() => watchLaterMovies, [watchLaterMovies]);

  const { activeSlide, handleActiveSlide } = useActiveSlide(
    activeSlideWatchLaterMovies,
    setActiveSlideWatchLaterMovies,
  );

  const movie = useMovie(movies, activeSlide);

  const { isLoading, error, data } = useQuery(
    'watchlaterMovies',
    () => getWatchlaterMovies(),
    { enabled: isLoggedIn },
  );

  useEffect(() => {
    data && dispatch(setWatchLaterMovies(data));
  }, [data]);

  return {
    isLoading,
    error,
    movie,
    movies,
    activeSlide,
    handleActiveSlide,
  };
};
