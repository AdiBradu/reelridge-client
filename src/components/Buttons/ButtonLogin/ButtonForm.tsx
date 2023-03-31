import { memo } from 'react';
// material ui
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
// types
import { ButtonFormProps } from '../../../types/types';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: '16px 16px',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const StyledButtonText = styled(Typography)(() => ({
  fontWeight: '500',
}));

export const ButtonForm: React.FC<ButtonFormProps> = ({ type, text, disabled }) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      <StyledButtonText variant="body1">{text}</StyledButtonText>
    </StyledButton>
  );
};

export const MemoizedButtonForm = memo(ButtonForm);
