import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// components
import { Body } from '../Typography/Body';
import { MemoizedSlideActions } from '../SlideActions/SlideActions';
// material ui
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// router
import { useLocation } from 'react-router-dom';
// types
import { UpcomingProps, PostersSliderProps } from '../../types/types';

// Import Swiper styles
import 'swiper/css';
import './PostersSlider.css';

const base_url = 'https://image.tmdb.org/t/p/';
const poster_size = 'w500/';

const ButtonSliderLeft = styled(Button)(({ theme }) => ({
  width: '48px',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1600,
  backgroundColor: 'rgba(0,0,0,0.3)',
  [theme.breakpoints.up('lg')]: {
    width: '64px',
    height: '100%',
  },
}));

const ButtonSliderRight = styled(Button)(({ theme }) => ({
  width: '48px',
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 1600,
  backgroundColor: 'rgba(0,0,0,0.3)',
  [theme.breakpoints.up('lg')]: {
    width: '64px',
    height: '100%',
  },
}));

export const PostersSlider: React.FC<PostersSliderProps> = ({
  movies,
  activeSlide,
  handleActiveSlide,
  pageNumber,
  handlePageNumber,
}) => {
  console.log('Posters Slider render');

  const swiperRef = useRef<SwiperCore>();
  const location = useLocation();

  return (
    <Swiper
      spaceBetween={16}
      className="my-swiper"
      onActiveIndexChange={(swiper) => {
        handleActiveSlide?.(swiper.activeIndex);
      }}
      initialSlide={activeSlide}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          height: 320,
        },
        800: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 6,
        },
      }}
    >
      <ButtonSliderLeft
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label={'Slide left'}
      >
        <ArrowBackIosNewRoundedIcon />
      </ButtonSliderLeft>
      <ButtonSliderRight
        onClick={() => swiperRef.current?.slideNext()}
        aria-label={'Slide right'}
      >
        <ArrowForwardIosRoundedIcon />
      </ButtonSliderRight>
      {movies?.map((movie: UpcomingProps, index: number) => (
        <SwiperSlide
          key={`${movie.title} ${index}`}
          className={`my-swiper-slide`}
          onClick={() => handleActiveSlide?.(index)}
        >
          {activeSlide === index && (
            <MemoizedSlideActions
              movie={movies[activeSlide]}
              movies={movies}
              activeSlide={activeSlide}
            />
          )}
          <img
            src={`${base_url}${poster_size}/${movie.image_path}`}
            alt={movie.title}
            width={'100%'}
            height={'100%'}
            loading={'lazy'}
          />
        </SwiperSlide>
      ))}
      {location.pathname !== '/watchlater' && pageNumber && (
        <SwiperSlide
          className="my-swiper-slide"
          onClick={() => handlePageNumber?.(pageNumber)}
        >
          <Body text={'Load more'} aria-label={'Load more movies'} />
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export const MemoizedPostersSlider = React.memo(PostersSlider);
