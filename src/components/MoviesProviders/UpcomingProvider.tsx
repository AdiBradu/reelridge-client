import React, { useEffect } from 'react';
// components
import { MemoizedMovie } from '../Movie/Movie';
import { MemoizedPostersSlider } from '../PostersSliders/PostersSlider';
import { Spinner } from '../Spinner/Spinner';
// react-query
import { useQuery } from 'react-query';
// api
import { getUpcomingMovies } from '../../api/features/upcomings';
import { setUpcomingMovies } from '../../api/features/upcomings/upcomingsSlice';
// material ui
import { Stack, Typography } from '@mui/material';
import theme from '../../styles/theme';
// redux
import { useAppDispatch } from '../../api/hooks/hooks';
// hooks
import { useUpcomingMovies } from '../../hooks/useUpcomingMovies';

export const UpcomingProvider: React.FC = () => {
  console.log('Upcoming Provider render');

  const dispatch = useAppDispatch();
  const {
    moviesMemo,
    activeSlideMemo,
    handleActiveSlideMemo,
    pageNumberMemo,
    handlePageNumberMemo,
  } = useUpcomingMovies();

  const { isLoading, error, data, refetch } = useQuery(
    ['upcomingMovies', pageNumberMemo],
    () => getUpcomingMovies(pageNumberMemo),
  );

  useEffect(() => {
    data && !moviesMemo.includes(data[0]) && dispatch(setUpcomingMovies(data));
  }, [data]);

  useEffect(() => {
    refetch;
  }, [pageNumberMemo]);

  if (isLoading) return <Spinner />;

  {
    error instanceof Error && (
      <Typography variant="body1" color={theme.palette.error.light}>
        {error.message}
      </Typography>
    );
  }

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
