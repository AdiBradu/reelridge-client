import { useMemo, useCallback } from 'react';
// redux
import { useAppDispatch } from '../api/hooks/hooks';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const usePageNumber = (
  page: number,
  reducer: ActionCreatorWithPayload<number>,
) => {
  const dispatch = useAppDispatch();

  const pageNumber = useMemo(() => page, [page]);

  const handlePageNumber = useCallback((page: number) => {
    dispatch(reducer(page));
  }, []);

  return { pageNumber, handlePageNumber };
};
