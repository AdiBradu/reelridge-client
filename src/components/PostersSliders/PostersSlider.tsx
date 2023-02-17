import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// id
import uniqid from 'uniqid';
// types
import { PostersSliderProps } from '../../types/types';
// components
import { Body } from '../Typography/Body';
import { Caption } from '../Typography/Caption';
// material ui
import { Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AddIcon from '@mui/icons-material/Add';
// api
import { addToWatchLater } from '../../api/features/watchlater';
// react query
import { useQuery } from 'react-query';

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

const ActionsWrapper = styled(Stack)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  justifyContent: 'flex-end',
  zIndex: '2000',
}));

const Actions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '33%',
  backgroundColor: theme.palette.secondary.main900,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const AddItem = styled(AddIcon)(({ theme }) => ({
  color: theme.palette.primary.main100,
}));

export const PostersSlider: React.FC<PostersSliderProps> = ({
  upcomings,
  handleActiveSlide,
  handlePageNumber,
  activeSlide,
}) => {
  const swiperRef = useRef<SwiperCore>();
  const [activeMovie, setActiveMovie] = useState({
    title: '',
    release_date: new Date(),
    image_path: '',
    overview: '',
    rating: '',
    votes: '',
  });
  console.log(activeMovie);

  const { isLoading, error, data, refetch } = useQuery(
    ['watchlater', activeMovie],
    () =>
      addToWatchLater(
        activeMovie.title,
        activeMovie.release_date,
        `${base_url}${poster_size}/${activeMovie.image_path}`,
        activeMovie.overview,
        activeMovie.rating,
        activeMovie.votes,
      ),
    {
      enabled: false,
    },
  );

  const handleAddToWatchLater = (index: number) => {
    upcomings && setActiveMovie(upcomings[index]);
    refetch();
    console.log('add to wathc later');
  };

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
      {upcomings?.map((image, index) => (
        <SwiperSlide
          key={uniqid()}
          className="my-swiper-slide"
          onClick={() => handleActiveSlide(index)}
        >
          <ActionsWrapper className="hovered">
            <Actions>
              <Button onClick={() => handleAddToWatchLater(index)}>
                <AddItem />
                <Caption text={'add movie'} />
              </Button>
            </Actions>
          </ActionsWrapper>

          <img src={`${base_url}${poster_size}/${image.image_path}`} />
        </SwiperSlide>
      ))}
      <SwiperSlide className="my-swiper-slide" onClick={handlePageNumber}>
        <Body text={'Load more'} />
      </SwiperSlide>
    </Swiper>
  );
};
