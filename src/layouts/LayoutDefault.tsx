import React from 'react';
// material ui
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
// types
import { LayoutDefaultProps } from '../types/types';
//components
import { MemoizedNavbar } from '../components/Navigation/Navbar/Navbar';

const StyledStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  padding: '0px 16px 64px 16px',
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up('lg')]: {
    padding: '32px 128px 128px 128px',
  },
}));

export const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  console.log('Layout render');
  return (
    <Box>
      <MemoizedNavbar />
      <StyledStack spacing={{ xs: 4, lg: 6 }}>{children}</StyledStack>
    </Box>
  );
};
