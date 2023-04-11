import { Fragment } from 'react';
// components
import { MemoizedMovie } from '../../components/Movie/Movie';
import { MemoizedPostersSlider } from '../../components/PostersSliders/PostersSlider';
import { Spinner } from '../../components/Spinner/Spinner';
import { Status } from '../Status/Status';
import { MemoizedPoster } from '../Poster/Poster';
import { ProviderWrapper } from '../../layouts/ProviderWrapper';
// material ui
import theme from '../../styles/theme';
// hooks
import { useWatchLaterMovies } from '../../hooks/useWatchLaterMovies';

export const WatchLaterProvider: React.FC = () => {
  console.log('WatchLaterProvider render');
  const { isLoading, error, movie, movies, activeSlide, handleActiveSlide } =
    useWatchLaterMovies();

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
