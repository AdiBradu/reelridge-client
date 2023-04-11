import { useMemo } from 'react';
// redux
import { useAppSelector } from '../api/hooks/hooks';
// api
import {
  setActiveSlideSearchedMovies,
  setPageNumberSearchedMovies,
} from '../api/features/movie/movieSlice';
// hooks
import { useMovie } from './useMovie';
import { useActiveSlide } from './useActiveSlide';
import { usePageNumber } from './usePageNumber';

export const useSearchedMovies = () => {
  console.log('useSearchedMovies render');
  const { searchedMovies } = useAppSelector((state) => state.search);
  const { activeSlideSearchedMovies } = useAppSelector((state) => state.movie);
  const { pageNumberSearchedMovies } = useAppSelector((state) => state.movie);
  const { searchQuery } = useAppSelector((state) => state.search);
  const movies = useMemo(() => searchedMovies, [searchedMovies]);

  const searchQueryMemo = useMemo(() => searchQuery, [searchQuery]);
  const { activeSlide, handleActiveSlide } = useActiveSlide(
    activeSlideSearchedMovies,
    setActiveSlideSearchedMovies,
  );
  const { pageNumber, handlePageNumber } = usePageNumber(
    pageNumberSearchedMovies,
    setPageNumberSearchedMovies,
  );
  const movie = useMovie(movies, activeSlide);

  return {
    movie,
    movies,
    activeSlide,
    handleActiveSlide,
    pageNumber,
    handlePageNumber,
    searchQueryMemo,
  };
};
