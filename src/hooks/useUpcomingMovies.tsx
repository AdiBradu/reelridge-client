import { useMemo, useEffect } from 'react';
// redux
import { useAppSelector } from '../api/hooks/hooks';
// api
import {
  setActiveSlideUpcomingMovies,
  setPageNumberUpcomingMovies,
} from '../api/features/movie/movieSlice';
// hooks
import { useMovie } from './useMovie';
import { useActiveSlide } from './useActiveSlide';
import { usePageNumber } from './usePageNumber';
// react-query
import { useQuery } from 'react-query';
// api
import { getUpcomingMovies } from '../api/features/upcomings';
import { setUpcomingMovies } from '../api/features/upcomings/upcomingsSlice';
// utils
import { dataNotIncluded } from '../utils/utils';
// redux
import { useAppDispatch } from '../api/hooks/hooks';

export const useUpcomingMovies = () => {
  console.log('useUpcomingMovies render');

  const dispatch = useAppDispatch();
  const { upcomingMovies } = useAppSelector((state) => state.upcoming);
  const { activeSlideUpcomingMovies } = useAppSelector((state) => state.movie);
  const { pageNumberUpcomingMovies } = useAppSelector((state) => state.movie);

  const movies = useMemo(() => upcomingMovies, [upcomingMovies]);
  const { activeSlide, handleActiveSlide } = useActiveSlide(
    activeSlideUpcomingMovies,
    setActiveSlideUpcomingMovies,
  );
  const { pageNumber, handlePageNumber } = usePageNumber(
    pageNumberUpcomingMovies,
    setPageNumberUpcomingMovies,
  );
  const movie = useMovie(movies, activeSlide);

  const { isLoading, error, data, refetch } = useQuery(
    ['upcomingMovies', pageNumber],
    () => getUpcomingMovies(pageNumber),
    {
      staleTime: 60000,
    },
  );

  useEffect(() => {
    data && dataNotIncluded(movies, data) && dispatch(setUpcomingMovies(data));
  }, [data]);

  useEffect(() => {
    refetch;
  }, [pageNumber]);

  return {
    isLoading,
    error,
    movie,
    movies,
    activeSlide,
    handleActiveSlide,
    pageNumber,
    handlePageNumber,
  };
};
