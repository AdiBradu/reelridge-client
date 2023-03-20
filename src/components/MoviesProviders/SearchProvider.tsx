import React from 'react';
// components
import { MemoizedMovie } from '../Movie/Movie';
import { MemoizedPostersSlider } from '../PostersSliders/PostersSlider';
// material ui
import { Stack, Typography } from '@mui/material';
import theme from '../../styles/theme';
// hooks
import { useSearchedMovies } from '../../hooks/useSearchedMovies';

export const SearchProvider: React.FC = () => {
  console.log('Search Provider render');

  const {
    moviesMemo,
    activeSlideMemo,
    handleActiveSlideMemo,
    pageNumberMemo,
    handlePageNumberMemo,
  } = useSearchedMovies();

  return (
    <React.Fragment>
      {moviesMemo && moviesMemo.length > 0 ? (
        <Stack spacing={6}>
          <MemoizedMovie movies={moviesMemo} activeSlide={activeSlideMemo} />
          <MemoizedPostersSlider
            movies={moviesMemo}
            activeSlide={activeSlideMemo}
            handleActiveSlide={handleActiveSlideMemo}
            pageNumber={pageNumberMemo}
            handlePageNumber={handlePageNumberMemo}
          />
        </Stack>
      ) : (
        <Typography variant="body1" color={theme.palette.primary.main100}>
          No movies loaded
        </Typography>
      )}
    </React.Fragment>
  );
};
