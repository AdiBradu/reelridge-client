import { Fragment, lazy, Suspense } from 'react';
// components
import { MemoizedMovie } from '../Movie/Movie';
import { MemoizedPostersSlider } from '../PostersSliders/PostersSlider';
const MemoizedPoster = lazy(() =>
  import('../Poster/Poster').then(({ MemoizedPoster }) => ({
    default: MemoizedPoster,
  })),
);
import { Spinner } from '../Spinner/Spinner';
import { Status } from '../Status/Status';
import { ProviderWrapper } from '../../layouts/ProviderWrapper';
// material ui
import theme from '../../styles/theme';
// hooks
import { useUpcomingMovies } from '../../hooks/useUpcomingMovies';

export const UpcomingProvider: React.FC = () => {
  console.log('Upcoming Provider render');
  const {
    isLoading,
    error,
    movie,
    movies,
    activeSlide,
    handleActiveSlide,
    pageNumber,
    handlePageNumber,
  } = useUpcomingMovies();

  if (isLoading) return <Spinner />;

  if (error instanceof Error)
    return <Status text={error.message} color={theme.palette.error.light} />;

  return (
    <Fragment>
      {movies?.length > 0 ? (
        <ProviderWrapper>
          <Suspense fallback={<Spinner />}>
            <MemoizedPoster movie={movie} />
          </Suspense>
          <MemoizedMovie movie={movie} />
          <MemoizedPostersSlider
            movie={movie}
            movies={movies}
            activeSlide={activeSlide}
            handleActiveSlide={handleActiveSlide}
            pageNumber={pageNumber}
            handlePageNumber={handlePageNumber}
          />
        </ProviderWrapper>
      ) : (
        <Status text={'No movies loaded'} color={theme.palette.primary.main100} />
      )}
    </Fragment>
  );
};
