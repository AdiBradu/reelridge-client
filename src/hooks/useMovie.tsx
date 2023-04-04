import { useState, useEffect, useMemo } from 'react';
// types
import { UpcomingProps } from '../types/types';
// models
import { MovieModel } from '../models/MovieModel';

export const useMovie = (movies: UpcomingProps[], activeSlide: number) => {
  console.log('useMovie render');
  const [movieState, setMovieState] = useState(movies[activeSlide]);

  useEffect(() => {
    const currentMovie = movies?.filter(
      (movie) => movies.indexOf(movie) === activeSlide,
    )[0];
    currentMovie && setMovieState(currentMovie);
  }, [movies, activeSlide]);

  const movie = useMemo(() => new MovieModel(movieState), [movieState]);

  return movie;
};
