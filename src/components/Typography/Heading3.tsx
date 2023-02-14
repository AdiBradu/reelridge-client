import React from 'react';
// material ui
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
// types
import { TextProps } from '../../types/types';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main100,
}));

export const Heading3: React.FC<TextProps> = ({ text }) => {
  return <StyledTypography variant="h3">{text}</StyledTypography>;
};
