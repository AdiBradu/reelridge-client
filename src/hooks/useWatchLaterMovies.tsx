import { useMemo } from 'react';
// redux
import { useAppSelector } from '../api/hooks/hooks';
// api
import { setActiveSlideWatchLaterMovies } from '../api/features/movie/movieSlice';
// hooks
// hooks
import { useMovie } from './useMovie';
import { useActiveSlide } from './useActiveSlide';
// models
import { MovieModel } from '../models/MovieModel';

export const useWatchLaterMovies = () => {
  console.log('useWatchLaterMovies render');
  const { watchLaterMovies } = useAppSelector((state) => state.watchlater);
  const { activeSlideWatchLaterMovies } = useAppSelector((state) => state.movie);
  const movies = useMemo(
    () => watchLaterMovies.map((movie) => new MovieModel(movie)),
    [watchLaterMovies],
  );
  const { activeSlide, handleActiveSlide } = useActiveSlide(
    activeSlideWatchLaterMovies,
    setActiveSlideWatchLaterMovies,
  );
  const movie = useMovie(movies, activeSlide);

  return {
    movie,
    movies,
    activeSlide,
    handleActiveSlide,
  };
};
