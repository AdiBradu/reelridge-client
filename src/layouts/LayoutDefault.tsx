// material ui
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
// types
import { LayoutDefaultProps } from '../types/types';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  padding: '32px 16px 64px 16px',
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up('lg')]: {
    padding: '64px 128px 128px 128px',
  },
}));

export const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <StyledBox>
      <Stack spacing={{ xs: 4, lg: 8 }}>{children}</Stack>
    </StyledBox>
  );
};
