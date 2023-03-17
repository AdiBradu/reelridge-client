import React, { useState, useEffect } from 'react';
// components
import { Input } from '../Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
// material ui
import { Box, Button, Typography, Stack } from '@mui/material';
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

const StyledButtonText = styled(Typography)(() => ({
  fontWeight: '500',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: '16px 16px',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const FormSearch: React.FC = () => {
  console.log('FormSearch render');
  const dispatch = useAppDispatch();
  const { pageNumberMemo, moviesMemo, searchQueryMemo, handleActiveSlideMemo } =
    useSearchedMovies();
  const [query, setQuery] = useState(searchQueryMemo);

  const {
    mutate: searchMovieMutation,
    data,
    isLoading,
    error,
  } = useMutation((search: { query: string; pageNumberMemo: number }) =>
    searchMovie(search),
  );

  const handleChangeQuery = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchQueryMemo !== query && moviesMemo[0] && dispatch(setSearchedMovies([]));
    searchQueryMemo !== query && moviesMemo[0] && handleActiveSlideMemo(0);
    searchQueryMemo !== query && searchMovieMutation({ query, pageNumberMemo });
    searchQueryMemo !== query && dispatch(setSearchQuery(query));
  };

  useEffect(() => {
    data && dispatch(setSearchedMovies([...moviesMemo, ...data]));
  }, [data]);

  useEffect(() => {
    searchMovieMutation({ query, pageNumberMemo });
  }, [pageNumberMemo]);

  if (isLoading) return <Spinner />;

  return (
    <StyledForm>
      <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => handleSearch(event)}>
        <FormBody>
          {error instanceof Error && (
            <Typography variant="body1" color={theme.palette.error.light}>
              {error.message}
            </Typography>
          )}
          {data && (
            <Typography variant="body1" color={theme.palette.success.light}>
              {data.message}
            </Typography>
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
            <StyledButton type="submit" disabled={query !== '' ? false : true}>
              <StyledButtonText variant="body1">search</StyledButtonText>
            </StyledButton>
          </FormBodyFooter>
        </FormBody>
      </form>
    </StyledForm>
  );
};
