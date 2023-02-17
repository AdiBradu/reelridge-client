import React, { useState, useEffect } from 'react';
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
// material ui
import { Typography } from '@mui/material';
import theme from '../../styles/theme';

export const UpcomingsPage: React.FC = () => {
  const [movies, setMovies] = useState<UpcomingProps[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, error, data } = useQuery(['upcomings', pageNumber], () =>
    getUpcomings(pageNumber),
  );

  useEffect(() => {
    data && setMovies([...movies, ...data]);
  }, [data]);

  const handleActiveSlide = (swiperSlideActiveIndex: number) => {
    setActiveSlide(swiperSlideActiveIndex);
  };

  const handlePageNumber = () => {
    setPageNumber(pageNumber + 1);
  };

  if (isLoading) return <Spinner />;
  {
    error instanceof Error && (
      <Typography variant="body1" color={theme.palette.error.light}>
        {error.message}
      </Typography>
    );
  }

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
        upcomings={movies}
        handleActiveSlide={handleActiveSlide}
        handlePageNumber={handlePageNumber}
        activeSlide={activeSlide}
      />
    </LayoutDefault>
  );
};
