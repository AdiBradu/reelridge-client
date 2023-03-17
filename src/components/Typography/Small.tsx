import React from 'react';
// material ui
import { Typography } from '@mui/material';
// types
import { TextProps } from '../../types/types';
import theme from '../../styles/theme';

export const Small: React.FC<TextProps> = ({ text }) => {
  return (
    <Typography variant="small" color={theme.palette.primary.main100}>
      {text}
    </Typography>
  );
};

export const MemoizedCaption = React.memo(Small);
