import React from 'react';
// redux
import { useAppSelector } from '../../../api/hooks/hooks';
// material ui
import { Stack, Typography } from '@mui/material';
import theme from '../../../styles/theme';

export const WelcomeUser: React.FC = () => {
  const { userName } = useAppSelector((state) => state.auth);

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 0, sm: 1 }}
      justifyContent={'center'}
      alignItems={{ xs: 'flex-start', sm: 'center' }}
    >
      <Typography variant="small" color={theme.palette.primary.main}>
        {'Hello, '}
      </Typography>
      <Typography variant="small" color={theme.palette.primary.main200}>
        {`${userName}`}
      </Typography>
    </Stack>
  );
};
