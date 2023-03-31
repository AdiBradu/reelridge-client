import { Fragment, useEffect } from 'react';
// components
import { MemoizedMovie } from '../../components/Movie/Movie';
import { MemoizedPostersSlider } from '../../components/PostersSliders/PostersSlider';
import { Spinner } from '../../components/Spinner/Spinner';
import { Status } from '../Status/Status';
import { MemoizedPoster } from '../Poster/Poster';
import { ProviderWrapper } from '../../layouts/ProviderWrapper';
// react query
import { useQuery } from 'react-query';
// api
import { getWatchlaterMovies } from '../../api/features/watchlater';
import { setWatchLaterMovies } from '../../api/features/watchlater/watchLaterSlice';
// material ui
import theme from '../../styles/theme';
// redux
import { useAppSelector, useAppDispatch } from '../../api/hooks/hooks';
// hooks
import { useWatchLaterMovies } from '../../hooks/useWatchLaterMovies';

export const WatchLaterProvider: React.FC = () => {
  console.log('WatchLaterProvider render');

  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { movie, movies, activeSlide, handleActiveSlide } = useWatchLaterMovies();

  const { isLoading, error, data } = useQuery(
    'watchlaterMovies',
    () => getWatchlaterMovies(),
    { enabled: isLoggedIn },
  );

  useEffect(() => {
    data && dispatch(setWatchLaterMovies(data));
  }, [data]);

  if (isLoading) return <Spinner />;

  if (error instanceof Error)
    return <Status text={error.message} color={theme.palette.error.light} />;

  return (
    <Fragment>
      {movies?.length > 0 ? (
        <ProviderWrapper>
          <MemoizedPoster movie={movie} />
          <MemoizedMovie movie={movie} />
          <MemoizedPostersSlider
            movie={movie}
            movies={movies}
            activeSlide={activeSlide}
            handleActiveSlide={handleActiveSlide}
          />
        </ProviderWrapper>
      ) : (
        <Status
          text={`You don't have any saved movies`}
          color={theme.palette.primary.main100}
        />
      )}
    </Fragment>
  );
};
