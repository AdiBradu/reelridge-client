import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// id
import uniqid from 'uniqid';
// types
import { PostersSliderProps } from '../../types/types';
// components
import { Body } from '../Typography/Body';
// material ui
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

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
  data,
  handleActiveSlide,
  handlePageNumber,
  activeSlide,
}) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <Swiper
      breakpointsBase="window"
      spaceBetween={16}
      className="my-swiper"
      onActiveIndexChange={(swiper) => {
        handleActiveSlide(swiper.activeIndex);
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
      <ButtonSliderLeft onClick={() => swiperRef.current?.slidePrev()}>
        <ArrowBackIosNewRoundedIcon />
      </ButtonSliderLeft>
      <ButtonSliderRight onClick={() => swiperRef.current?.slideNext()}>
        <ArrowForwardIosRoundedIcon />
      </ButtonSliderRight>
      {data?.map((image, index) => (
        <SwiperSlide
          key={uniqid()}
          className="my-swiper-slide"
          onClick={() => handleActiveSlide(index)}
        >
          <img src={`${base_url}${poster_size}/${image.image_path}`} />
        </SwiperSlide>
      ))}
      <SwiperSlide className="my-swiper-slide" onClick={handlePageNumber}>
        <Body text={'Load more'} />
      </SwiperSlide>
    </Swiper>
  );
};
