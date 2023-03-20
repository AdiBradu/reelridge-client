import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../api/hooks/hooks';
// api
import { setActiveSlideWatchLaterMovies } from '../api/features/movie/movieSlice';

export const useWatchLaterMovies = () => {
  console.log('useWatchLaterMovies render');

  const dispatch = useAppDispatch();
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);
  const { activeSlideWatchLaterMovies } = useAppSelector((state) => state.movie);

  const moviesMemo = useMemo(() => watchLaterMovies, [watchLaterMovies]);

  const activeSlideMemo = useMemo(
    () => activeSlideWatchLaterMovies,
    [activeSlideWatchLaterMovies],
  );

  const handleActiveSlideMemo = useCallback((index: number) => {
    dispatch(setActiveSlideWatchLaterMovies(index));
  }, []);

  return {
    moviesMemo,
    activeSlideMemo,
    handleActiveSlideMemo,
  };
};
