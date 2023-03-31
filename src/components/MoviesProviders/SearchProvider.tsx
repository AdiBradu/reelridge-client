import { Fragment } from 'react';
// components
import { MemoizedMovie } from '../Movie/Movie';
import { MemoizedPostersSlider } from '../PostersSliders/PostersSlider';
import { Status } from '../Status/Status';
import { MemoizedPoster } from '../Poster/Poster';
import { ProviderWrapper } from '../../layouts/ProviderWrapper';
// material ui
import theme from '../../styles/theme';
// hooks
import { useSearchedMovies } from '../../hooks/useSearchedMovies';

export const SearchProvider: React.FC = () => {
  console.log('Search Provider render');
  const { movie, movies, activeSlide, handleActiveSlide, pageNumber, handlePageNumber } =
    useSearchedMovies();

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
