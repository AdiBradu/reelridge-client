// material ui
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
// types
import { TextProps } from '../../types/types';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main100,
  zIndex: 105,
}));

export const Heading2: React.FC<TextProps> = ({ text }) => {
  console.log('Heading 2 render', text);

  return <StyledTypography variant="h2">{text}</StyledTypography>;
};
