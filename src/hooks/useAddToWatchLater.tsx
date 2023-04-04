// types
import { UpcomingProps } from '../types/types';
// redux
import { useAppDispatch } from '../api/hooks/hooks';
// react query
import { useMutation } from 'react-query';
// api
import { addToWatchLater } from '../api/features/watchlater/index';
import { appendWatchLaterMovie } from '../api/features/watchlater/watchLaterSlice';

export const useAddToWatchLater = (movie: UpcomingProps) => {
  console.log('useAddToWatchLater render');
  const dispatch = useAppDispatch();

  const addToWatchLaterMutation = useMutation((movie: UpcomingProps) =>
    addToWatchLater(movie),
  );

  const handleAddToWatchLater = () => {
    addToWatchLaterMutation.mutate(movie);
    dispatch(appendWatchLaterMovie(movie));
  };

  return { handleAddToWatchLater };
};
