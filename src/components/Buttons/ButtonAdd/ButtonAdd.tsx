import React from 'react';
// components
import { Caption } from '../../Typography/Caption';
// material ui
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
// redux
import { useAppDispatch } from '../../../api/hooks/hooks';
// react query
import { useMutation } from 'react-query';
// api
import { addToWatchLater } from '../../../api/features/watchlater/index';
import { appendWatchLaterMovie } from '../../../api/features/watchlater/watchLaterSlice';
// types
import { UpcomingProps, ButtonAddProps } from '../../../types/types';

const AddItem = styled(AddIcon)(({ theme }) => ({
  color: theme.palette.primary.main100,
}));

export const ButtonAdd: React.FC<ButtonAddProps> = ({ movies, activeSlide }) => {
  console.log('ButtonAdd render');

  const dispatch = useAppDispatch();
  const addToWatchLaterMutation = useMutation((movie: UpcomingProps) =>
    addToWatchLater(movie),
  );

  const handleAddToWatchLater = () => {
    addToWatchLaterMutation.mutate(movies[activeSlide]);
    dispatch(appendWatchLaterMovie(movies[activeSlide]));
  };

  return (
    <Button onClick={() => handleAddToWatchLater()} aria-label={'Add movie'}>
      <AddItem />
      <Caption text={'add movie'} />
    </Button>
  );
};
