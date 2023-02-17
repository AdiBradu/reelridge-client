import * as React from 'react';
// material ui
import { CircularProgress, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
// components
import { Body } from '../Typography/Body';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  inset: 0,
}));

const SpinnerItem = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Spinner: React.FC = () => {
  return (
    <StyledBox>
      <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
        <SpinnerItem size={64} />
        <Body text="Loading..." />
      </Stack>
    </StyledBox>
  );
};
