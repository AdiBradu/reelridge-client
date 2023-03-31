import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../api/hooks/hooks';
// api
import {
  setActiveSlideSearchedMovies,
  setPageNumberSearchedMovies,
} from '../api/features/movie/movieSlice';
// hooks
import { useMovie } from './useMovie';

export const useSearchedMovies = () => {
  console.log('useSearchedMovies render');

  const dispatch = useAppDispatch();
  const { searchedMovies } = useAppSelector((state) => state.search);
  const { activeSlideSearchedMovies } = useAppSelector((state) => state.movie);
  const { pageNumberSearchedMovies } = useAppSelector((state) => state.movie);
  const { searchQuery } = useAppSelector((state) => state.search);

  const movies = useMemo(() => searchedMovies, [searchedMovies]);
  const searchQueryMemo = useMemo(() => searchQuery, [searchQuery]);
  const pageNumber = useMemo(() => pageNumberSearchedMovies, [pageNumberSearchedMovies]);
  const activeSlide = useMemo(
    () => activeSlideSearchedMovies,
    [activeSlideSearchedMovies],
  );

  const handleActiveSlide = useCallback((index: number) => {
    dispatch(setActiveSlideSearchedMovies(index));
  }, []);

  const handlePageNumber = useCallback((pageNumber: number) => {
    dispatch(setPageNumberSearchedMovies(pageNumber));
  }, []);

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
