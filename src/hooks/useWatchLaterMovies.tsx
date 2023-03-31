import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../api/hooks/hooks';
// api
import { setActiveSlideWatchLaterMovies } from '../api/features/movie/movieSlice';
// hooks
import { useMovie } from './useMovie';

export const useWatchLaterMovies = () => {
  console.log('useWatchLaterMovies render');

  const dispatch = useAppDispatch();
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);
  const { activeSlideWatchLaterMovies } = useAppSelector((state) => state.movie);

  const movies = useMemo(() => watchLaterMovies, [watchLaterMovies]);

  const activeSlide = useMemo(
    () => activeSlideWatchLaterMovies,
    [activeSlideWatchLaterMovies],
  );

  const handleActiveSlide = useCallback((index: number) => {
    dispatch(setActiveSlideWatchLaterMovies(index));
  }, []);

  const movie = useMovie(movies, activeSlide);

  return {
    movie,
    movies,
    activeSlide,
    handleActiveSlide,
  };
};
