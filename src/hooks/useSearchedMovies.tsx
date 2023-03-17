import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../api/hooks/hooks';
// api
import {
  setActiveSlideSearchedMovies,
  setPageNumberSearchedMovies,
} from '../api/features/movie/movieSlice';

export const useSearchedMovies = () => {
  console.log('useSearchedMovies render');

  const dispatch = useAppDispatch();
  const { searchedMovies } = useAppSelector((state) => state.search);
  const { activeSlideSearchedMovies } = useAppSelector((state) => state.movie);
  const { pageNumberSearchedMovies } = useAppSelector((state) => state.movie);
  const { searchQuery } = useAppSelector((state) => state.search);

  const moviesMemo = useMemo(() => searchedMovies, [searchedMovies]);
  const searchQueryMemo = useMemo(() => searchQuery, [searchQuery]);
  const pageNumberMemo = useMemo(
    () => pageNumberSearchedMovies,
    [pageNumberSearchedMovies],
  );
  const activeSlideMemo = useMemo(
    () => activeSlideSearchedMovies,
    [activeSlideSearchedMovies],
  );

  const handleActiveSlideMemo = useCallback(
    (index: number) => {
      dispatch(setActiveSlideSearchedMovies(index));
    },
    [activeSlideSearchedMovies],
  );

  const handlePageNumberMemo = useCallback(
    (pageNumber: number) => {
      dispatch(setPageNumberSearchedMovies(pageNumber));
    },
    [pageNumberSearchedMovies],
  );

  return {
    moviesMemo,
    activeSlideMemo,
    handleActiveSlideMemo,
    pageNumberMemo,
    handlePageNumberMemo,
    searchQueryMemo,
  };
};
