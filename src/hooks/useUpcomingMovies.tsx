import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../api/hooks/hooks';
// api
import {
  setActiveSlideUpcomingMovies,
  setPageNumberUpcomingMovies,
} from '../api/features/movie/movieSlice';

export const useUpcomingMovies = () => {
  console.log('useUpcomingMovies render');

  const dispatch = useAppDispatch();
  const { upcomingMovies } = useAppSelector((state) => state.upcoming);
  const { activeSlideUpcomingMovies } = useAppSelector((state) => state.movie);
  const { pageNumberUpcomingMovies } = useAppSelector((state) => state.movie);

  const moviesMemo = useMemo(() => upcomingMovies, [upcomingMovies]);
  const pageNumberMemo = useMemo(
    () => pageNumberUpcomingMovies,
    [pageNumberUpcomingMovies],
  );
  const activeSlideMemo = useMemo(
    () => activeSlideUpcomingMovies,
    [activeSlideUpcomingMovies],
  );

  const handleActiveSlideMemo = useCallback(
    (index: number) => {
      dispatch(setActiveSlideUpcomingMovies(index));
    },
    [activeSlideUpcomingMovies],
  );

  const handlePageNumberMemo = useCallback(
    (pageNumber: number) => {
      dispatch(setPageNumberUpcomingMovies(pageNumber));
    },
    [pageNumberUpcomingMovies],
  );

  return {
    moviesMemo,
    activeSlideMemo,
    handleActiveSlideMemo,
    pageNumberMemo,
    handlePageNumberMemo,
  };
};
