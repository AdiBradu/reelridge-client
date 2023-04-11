import { useState, useEffect } from 'react';
// react query
import { useMutation } from 'react-query';
// api
import { searchMovie } from '../api/features/search';
import { setSearchedMovies, setSearchQuery } from '../api/features/search/searchSlice';
// redux
import { useAppDispatch } from '../api/hooks/hooks';
// hooks
import { useSearchedMovies } from '../hooks/useSearchedMovies';

export const useFormSearch = () => {
  console.log('useFormSearch render');
  const dispatch = useAppDispatch();
  const { pageNumber, movies, searchQueryMemo, handleActiveSlide } = useSearchedMovies();
  const [query, setQuery] = useState(searchQueryMemo);

  const {
    mutate: searchMovieMutation,
    data,
    isLoading,
    error,
  } = useMutation((search: { query: string; pageNumber: number }) => searchMovie(search));

  const handleChangeQuery = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQueryMemo !== query && movies[0]) {
      dispatch(setSearchedMovies([]));
      handleActiveSlide(0);
    }
    if (searchQueryMemo !== query) {
      searchMovieMutation({ query, pageNumber });
      dispatch(setSearchQuery(query));
    }
  };

  useEffect(() => {
    data && dispatch(setSearchedMovies([...movies, ...data]));
  }, [data]);

  useEffect(() => {
    searchMovieMutation({ query, pageNumber });
  }, [pageNumber]);

  return {
    isLoading,
    error,
    query,
    handleChangeQuery,
    handleSearch,
  };
};
