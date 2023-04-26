import { memo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// components
import { MemoizedSlideActions } from '../SlideActions/SlideActions';
import { ButtonLoadMore } from '../Buttons/ButtonLoadMore/ButtonLoadMore';
import { ButtonSwiper } from '../Buttons/ButtonSwiper/ButtonSwiper';
// types
import { UpcomingProps, PostersSliderProps } from '../../types/types';
// hooks
import { useSwiperNavigation } from '../../hooks/useSwiperNavigation';
import { usePosterAnimation } from '../../hooks/usePosterAnimation';

export const PostersSlider: React.FC<PostersSliderProps> = ({
  movies,
  activeSlide,
  handleActiveSlide,
  pageNumber,
  handlePageNumber,
}) => {
  console.log('Posters Slider render', movies);
  const { swiperRef, handleSwiperNavigation } = useSwiperNavigation();
  const { handleAnimation } = usePosterAnimation();

  return (
    <Swiper
      spaceBetween={16}
      className={'mySwiper'}
      onActiveIndexChange={(swiper) => {
        handleActiveSlide?.(swiper.activeIndex);
      }}
      initialSlide={activeSlide}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      breakpoints={{
        0: {
          slidesPerView: 2,
          height: 320,
        },
        600: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
        1536: {
          slidesPerView: 8,
        },
      }}
    >
      <ButtonSwiper
        direction={'left'}
        handleSwiperNavigation={() => handleSwiperNavigation('left')}
      />
      <ButtonSwiper
        direction={'right'}
        handleSwiperNavigation={() => handleSwiperNavigation('right')}
      />
      {movies?.map((movie: UpcomingProps, index: number) => (
        <SwiperSlide
          key={`${movie?.title}-${index}`}
          className={'mySwiperSlide'}
          onClick={() => {
            handleActiveSlide?.(index);
            handleAnimation();
          }}
        >
          {activeSlide === index && <MemoizedSlideActions movie={movie} />}
          <img
            src={movie?.image_path}
            alt={movie?.title}
            width={'100%'}
            height={'100%'}
            loading={'lazy'}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <ButtonLoadMore pageNumber={pageNumber} handlePageNumber={handlePageNumber} />
      </SwiperSlide>
    </Swiper>
  );
};

export const MemoizedPostersSlider = memo(PostersSlider);
