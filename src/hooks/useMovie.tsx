import { useState, useEffect, useMemo } from 'react';
// types
import { UpcomingProps } from '../types/types';

export const useMovie = (movies: UpcomingProps[], activeSlide: number) => {
  console.log('useMovie render');
  const [movieState, setMovieState] = useState(movies[activeSlide]);

  useEffect(() => {
    const newMovie = movies?.filter((movie) => movies.indexOf(movie) === activeSlide);
    newMovie && setMovieState(newMovie[0]);
  }, [movies, activeSlide]);

  const movie = useMemo(() => movieState, [movieState]);

  return movie;
};
