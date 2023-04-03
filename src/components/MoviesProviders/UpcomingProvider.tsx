import { Fragment, useEffect, lazy, Suspense } from 'react';
// components
// import { MemoizedPoster } from '../Poster/Poster';
import { MemoizedMovie } from '../Movie/Movie';
// import { MemoizedPostersSlider } from '../PostersSliders/PostersSlider';
const MemoizedPoster = lazy(() =>
  import('../Poster/Poster').then(({ MemoizedPoster }) => ({
    default: MemoizedPoster,
  })),
);
// const MemoizedMovie = lazy(() =>
//   import('../Movie/Movie').then(({ MemoizedMovie }) => ({
//     default: MemoizedMovie,
//   })),
// );
const MemoizedPostersSlider = lazy(() =>
  import('../PostersSliders/PostersSlider').then(({ MemoizedPostersSlider }) => ({
    default: MemoizedPostersSlider,
  })),
);
import { Spinner } from '../Spinner/Spinner';
import { Status } from '../Status/Status';
import { ProviderWrapper } from '../../layouts/ProviderWrapper';
// react-query
import { useQuery } from 'react-query';
// api
import { getUpcomingMovies } from '../../api/features/upcomings';
import { setUpcomingMovies } from '../../api/features/upcomings/upcomingsSlice';
// material ui
import theme from '../../styles/theme';
// redux
import { useAppDispatch } from '../../api/hooks/hooks';
// hooks
import { useUpcomingMovies } from '../../hooks/useUpcomingMovies';
// utils
import { dataNotIncluded } from '../../utils/utils';

export const UpcomingProvider: React.FC = () => {
  console.log('Upcoming Provider render');

  const dispatch = useAppDispatch();
  const { movie, movies, activeSlide, handleActiveSlide, pageNumber, handlePageNumber } =
    useUpcomingMovies();

  const { isLoading, error, data, refetch } = useQuery(
    ['upcomingMovies', pageNumber],
    () => getUpcomingMovies(pageNumber),
    {
      staleTime: 60000,
    },
  );

  console.log(data);

  useEffect(() => {
    data && dataNotIncluded(movies, data) && dispatch(setUpcomingMovies(data));
  }, [data]);

  useEffect(() => {
    refetch;
  }, [pageNumber]);

  if (isLoading) return <Spinner />;

  if (error instanceof Error)
    return <Status text={error.message} color={theme.palette.error.light} />;

  return (
    <Fragment>
      {movies?.length > 0 ? (
        <ProviderWrapper>
          <Suspense fallback={<Spinner />}>
            <MemoizedPoster movie={movie} />
            <MemoizedMovie movie={movie} />
            <MemoizedPostersSlider
              movie={movie}
              movies={movies}
              activeSlide={activeSlide}
              handleActiveSlide={handleActiveSlide}
              pageNumber={pageNumber}
              handlePageNumber={handlePageNumber}
            />
          </Suspense>
        </ProviderWrapper>
      ) : (
        <Status text={'No movies loaded'} color={theme.palette.primary.main100} />
      )}
    </Fragment>
  );
};
