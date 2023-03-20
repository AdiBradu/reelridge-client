import React, { useEffect } from 'react';
// components
import { MemoizedMovie } from '../../components/Movie/Movie';
import { MemoizedPostersSlider } from '../../components/PostersSliders/PostersSlider';
import { Spinner } from '../../components/Spinner/Spinner';
// react query
import { useQuery } from 'react-query';
// api
import { getWatchlaterMovies } from '../../api/features/watchlater';
import { setWatchLaterMovies } from '../../api/features/watchlater/watchLaterSlice';
// material ui
import { Typography, Stack } from '@mui/material';
import theme from '../../styles/theme';
// redux
import { useAppSelector, useAppDispatch } from '../../api/hooks/hooks';
// hooks
import { useWatchLaterMovies } from '../../hooks/useWatchLaterMovies';

export const WatchLaterProvider: React.FC = () => {
  console.log('WatchLaterProvider render');

  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { moviesMemo, activeSlideMemo, handleActiveSlideMemo } = useWatchLaterMovies();

  const { isLoading, error, data } = useQuery(
    'watchlaterMovies',
    () => getWatchlaterMovies(),
    { enabled: isLoggedIn },
  );

  useEffect(() => {
    data && dispatch(setWatchLaterMovies(data));
  }, [data]);

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
          />
        </Stack>
      ) : (
        <Typography variant="body1" color={theme.palette.primary.main100}>
          You don't have any saved movies.
        </Typography>
      )}
    </React.Fragment>
  );
};
