// material ui
import { styled, Typography } from '@mui/material';
// types
import { TextProps } from '../../types/types';
import theme from '../../styles/theme';

const SmallTypography = styled(Typography)(() => ({
  zIndex: 105,
}));

export const Small: React.FC<TextProps> = ({ text }) => {
  return (
    <SmallTypography variant="small" color={theme.palette.primary.main100}>
      {text}
    </SmallTypography>
  );
};
