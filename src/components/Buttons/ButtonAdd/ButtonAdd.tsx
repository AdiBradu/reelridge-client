import { memo } from 'react';
// components
import { Caption } from '../../Typography/Caption';
// material ui
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
// types
import { MovieProps } from '../../../types/types';
// hooks
import { useAddToWatchLater } from '../../../hooks/useAddToWatchLater';

const AddItem = styled(AddIcon)(({ theme }) => ({
  color: theme.palette.primary.main100,
}));

export const ButtonAdd: React.FC<MovieProps> = ({ movie }) => {
  console.log('ButtonAdd render');
  const { handleAddToWatchLater } = useAddToWatchLater(movie);

  return (
    <Button onClick={() => handleAddToWatchLater()} aria-label={'Add movie'}>
      <AddItem />
      <Caption text={'add movie'} />
    </Button>
  );
};

export const MemoizedButtonAdd = memo(ButtonAdd);
