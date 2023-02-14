// material ui
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
// types
import { SectionTitleProps } from '../../types/types';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main700,
}));

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <StyledTypography variant="h1">{title}</StyledTypography>;
};
