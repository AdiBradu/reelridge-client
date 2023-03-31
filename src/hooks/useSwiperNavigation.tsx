import { useEffect, useRef } from 'react';
// Import Swiper React components
import SwiperCore from 'swiper';
// react swipeable
import { useSwipeable } from 'react-swipeable';

export const useSwiperNavigation = () => {
  console.log('useSwiperNavigation render');
  const swiperRef = useRef<SwiperCore>();

  const handleSwiperNavigation = (direction: string) => {
    direction === 'left'
      ? swiperRef.current?.slidePrev()
      : swiperRef.current?.slideNext();
  };

  const { ref } = useSwipeable({
    onSwipedLeft: () => swiperRef.current?.slideNext(),
    onSwipedRight: () => swiperRef.current?.slidePrev(),
  }) as { ref: any };

  useEffect(() => {
    ref(document);
  });

  return { swiperRef, handleSwiperNavigation };
};
