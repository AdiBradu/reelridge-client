// material ui
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
// types
import { TextProps } from '../../types/types';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main100,
  zIndex: 105,
}));

export const Caption: React.FC<TextProps> = ({ text }) => {
  return <StyledTypography variant="caption">{text}</StyledTypography>;
};
