import { useState, useEffect } from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Movie } from '../../components/Movie/Movie';
import { PostersSlider } from '../../components/PostersSliders/PostersSlider';
import { Spinner } from '../../components/Spinner/Spinner';
// react query
import { useQuery } from 'react-query';
// api
import { getUpcomings } from '../../api/features/upcomings';
// types
import { UpcomingProps } from '../../types/types';

export const UpcomingsPage = () => {
  const [movies, setMovies] = useState<UpcomingProps[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMovie, setActiveMovie] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, error, data } = useQuery(['upcomings', pageNumber], () =>
    getUpcomings(pageNumber),
  );

  useEffect(() => {
    data && setMovies([...movies, ...data]);
  }, [data]);

  useEffect(() => {
    movies.length > 0 && setActiveMovie(movies[activeSlide]);
  }, [movies]);

  const handleActiveSlide = (swiperSlideActiveIndex: number) => {
    setActiveSlide(swiperSlideActiveIndex);
    setActiveMovie(movies[swiperSlideActiveIndex]);
  };

  const handlePageNumber = () => {
    setPageNumber(pageNumber + 1);
  };

  if (isLoading) return <Spinner />;
  if (error) return 'An error has occurred. Please try again.';

  return (
    <LayoutDefault>
      <SectionTitle title="upcomings" />
      {movies.length > 0 ? (
        <Movie
          id={movies[activeSlide].id}
          title={movies[activeSlide].title}
          overview={movies[activeSlide].overview}
          release_date={movies[activeSlide].release_date}
          rating={movies[activeSlide].rating}
          votes={movies[activeSlide].votes}
        />
      ) : (
        <Spinner />
      )}
      <PostersSlider
        data={movies}
        handleActiveSlide={handleActiveSlide}
        handlePageNumber={handlePageNumber}
        activeSlide={activeSlide}
      />
    </LayoutDefault>
  );
};
