import { useState, useEffect } from 'react';
// types
import { UpcomingProps } from '../types/types';

export const useMovie = (movies: UpcomingProps[], activeSlide: number) => {
  console.log('useMovie render');
  const [movie, setMovie] = useState(movies[activeSlide]);

  useEffect(() => {
    const newMovie = movies?.filter((movie) => movies.indexOf(movie) === activeSlide);
    newMovie && setMovie(newMovie[0]);
  }, [movies, activeSlide]);

  return { movie };
};
