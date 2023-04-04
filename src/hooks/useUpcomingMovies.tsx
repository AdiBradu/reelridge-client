import { useMemo } from 'react';
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
// models
import { MovieModel } from '../models/MovieModel';

export const useUpcomingMovies = () => {
  console.log('useUpcomingMovies render');
  const { upcomingMovies } = useAppSelector((state) => state.upcoming);
  const { activeSlideUpcomingMovies } = useAppSelector((state) => state.movie);
  const { pageNumberUpcomingMovies } = useAppSelector((state) => state.movie);
  const movies = useMemo(
    () => upcomingMovies.map((movie) => new MovieModel(movie)),
    [upcomingMovies],
  );
  const { activeSlide, handleActiveSlide } = useActiveSlide(
    activeSlideUpcomingMovies,
    setActiveSlideUpcomingMovies,
  );
  const { pageNumber, handlePageNumber } = usePageNumber(
    pageNumberUpcomingMovies,
    setPageNumberUpcomingMovies,
  );
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
