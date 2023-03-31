// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
// types
import { LayoutProps } from '../types/types';

const DefaultPage = styled(Stack)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.secondary.main,
}));

export const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  console.log('LayoutPage render');
  return <DefaultPage>{children}</DefaultPage>;
};
