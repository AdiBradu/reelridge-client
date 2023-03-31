// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
// types
import { LayoutProps } from '../types/types';

const StyledStack = styled(Stack)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  padding: '0px 16px 64px 16px',
  backgroundColor: theme.palette.secondary.main,
  gap: '32px',
  [theme.breakpoints.up('lg')]: {
    padding: '0px 128px 128px 128px',
    gap: '48px',
  },
}));

export const LayoutDefault: React.FC<LayoutProps> = ({ children }) => {
  console.log('Layout Default render');
  return <StyledStack>{children}</StyledStack>;
};
