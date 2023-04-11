import { useState, useEffect, useMemo } from 'react';
// types
import { UpcomingProps } from '../types/types';

export const useMovie = (movies: UpcomingProps[], activeSlide: number) => {
  console.log('useMovie render');
  const [movieState, setMovieState] = useState(movies[activeSlide]);
  console.log(movieState);
  useEffect(() => {
    const currentMovie = movies?.filter(
      (movie) => movies.indexOf(movie) === activeSlide,
    )[0];
    currentMovie && setMovieState(currentMovie);
  }, [movies, activeSlide]);

  const movie = useMemo(() => movieState, [movieState]);

  return movie;
};
