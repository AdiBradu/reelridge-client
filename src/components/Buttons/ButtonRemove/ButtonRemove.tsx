import { memo } from 'react';
// components
import { Caption } from '../../Typography/Caption';
// material ui
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutline';
// hooks
import { useRemoveFromWatchLater } from '../../../hooks/useRemoveFromWatchLater';

const RemoveItem = styled(RemoveIcon)(({ theme }) => ({
  color: theme.palette.primary.main100,
}));

export const ButtonRemove: React.FC = () => {
  console.log('ButtonRemove render');
  const { handleRemoveFromWatchLater } = useRemoveFromWatchLater();

  return (
    <Button
      onClick={(event) => handleRemoveFromWatchLater(event)}
      aria-label={'Remove movie'}
    >
      <RemoveItem />
      <Caption text={'remove movie'} />
    </Button>
  );
};

export const MemoizedButtonRemove = memo(ButtonRemove);
