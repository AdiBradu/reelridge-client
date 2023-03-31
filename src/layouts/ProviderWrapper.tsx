// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// types
import { LayoutProps } from '../types/types';

const ProviderWrapperStack = styled(Stack)(() => ({
  gap: '48px',
}));

export const ProviderWrapper: React.FC<LayoutProps> = ({ children }) => {
  console.log('ProviderWrapper render');
  return <ProviderWrapperStack>{children}</ProviderWrapperStack>;
};
