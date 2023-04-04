import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch } from '../api/hooks/hooks';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const useActiveSlide = (
  slide: number,
  reducer: ActionCreatorWithPayload<number>,
) => {
  const dispatch = useAppDispatch();

  const activeSlide = useMemo(() => slide, [slide]);

  const handleActiveSlide = useCallback((index: number) => {
    dispatch(reducer(index));
  }, []);

  return { activeSlide, handleActiveSlide };
};
