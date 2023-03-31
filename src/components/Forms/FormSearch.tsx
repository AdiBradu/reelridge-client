import { useState, useEffect } from 'react';
// components
import { Input } from '../Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
import { Status } from '../Status/Status';
import { MemoizedButtonForm } from '../Buttons/ButtonLogin/ButtonForm';
// material ui
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// react query
import { useMutation } from 'react-query';
// api
import { searchMovie } from '../../api/features/search';
import { setSearchedMovies, setSearchQuery } from '../../api/features/search/searchSlice';
// redux
import { useAppDispatch } from '../../api/hooks/hooks';
// hooks
import { useSearchedMovies } from '../../hooks/useSearchedMovies';

const StyledForm = styled(Box)(() => ({
  maxWidth: '400px',
}));

const FormBody = styled(Stack)(() => ({
  gap: '32px',
}));

const FormBodyInputs = styled(Stack)(() => ({
  gap: '24px',
}));

const FormBodyFooter = styled(Stack)(() => ({
  gap: '16px',
}));

export const FormSearch: React.FC = () => {
  console.log('FormSearch render');
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

  if (isLoading) return <Spinner />;

  return (
    <StyledForm>
      <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => handleSearch(event)}>
        <FormBody>
          {error instanceof Error && (
            <Status text={error.message} color={theme.palette.error.light} />
          )}
          <FormBodyInputs>
            <Input
              label="search"
              variant="outlined"
              name="search"
              type="search"
              value={query}
              onChange={handleChangeQuery}
            />
          </FormBodyInputs>
          <FormBodyFooter>
            <MemoizedButtonForm
              type={'submit'}
              text={'search'}
              disabled={query !== '' ? false : true}
            />
          </FormBodyFooter>
        </FormBody>
      </form>
    </StyledForm>
  );
};
