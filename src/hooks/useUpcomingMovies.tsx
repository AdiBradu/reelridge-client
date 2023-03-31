import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../api/hooks/hooks';
// api
import {
  setActiveSlideUpcomingMovies,
  setPageNumberUpcomingMovies,
} from '../api/features/movie/movieSlice';
// hooks
import { useMovie } from './useMovie';

export const useUpcomingMovies = () => {
  console.log('useUpcomingMovies render');

  const dispatch = useAppDispatch();
  const { upcomingMovies } = useAppSelector((state) => state.upcoming);
  const { activeSlideUpcomingMovies } = useAppSelector((state) => state.movie);
  const { pageNumberUpcomingMovies } = useAppSelector((state) => state.movie);

  const movies = useMemo(() => upcomingMovies, [upcomingMovies]);
  const pageNumber = useMemo(() => pageNumberUpcomingMovies, [pageNumberUpcomingMovies]);
  const activeSlide = useMemo(
    () => activeSlideUpcomingMovies,
    [activeSlideUpcomingMovies],
  );

  const handleActiveSlide = useCallback((index: number) => {
    dispatch(setActiveSlideUpcomingMovies(index));
  }, []);

  const handlePageNumber = useCallback((pageNumber: number) => {
    dispatch(setPageNumberUpcomingMovies(pageNumber));
  }, []);

  const movie = useMovie(movies, activeSlide);

  return {
    movie,
    movies,
    activeSlide,
    handleActiveSlide,
    pageNumber,
    handlePageNumber,
  };
};
