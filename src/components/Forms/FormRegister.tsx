import React from 'react';
// components
import { Input } from '../Input/Input';
// material ui
import { Box, Button, Typography, Stack, Link } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// types
import { FormRegisterProps } from '../../types/types';

const StyledForm = styled(Box)(() => ({
  maxWidth: '400px',
}));

const FormBody = styled(Stack)(() => ({
  gap: '32px',
}));

const FormBodyInputs = styled(Stack)(() => ({
  gap: '24px',
}));

const FormBodyFooter = styled(Stack)(() => ({
  gap: '16px',
}));

const FormFooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main100,
  textAlign: 'center',
}));

const StyledButtonText = styled(Typography)(() => ({
  fontWeight: '500',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: '16px 16px',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const FormRegister: React.FC<FormRegisterProps> = ({
  onSubmit,
  formData,
  onChange,
}) => {
  return (
    <StyledForm>
      <form onSubmit={onSubmit}>
        <FormBody>
          <FormBodyInputs>
            <Input
              label="username"
              variant="outlined"
              name="username"
              type="text"
              value={formData.username}
              onChange={onChange}
            />
            <Input
              label="email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
            />
            <Input
              label="password"
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={onChange}
            />
          </FormBodyInputs>
          <FormBodyFooter>
            <StyledButton type="submit">
              <StyledButtonText variant="body1">register account</StyledButtonText>
            </StyledButton>
            <FormFooterText variant="caption">
              Please{' '}
              <Link href={'/login'} color={theme.palette.primary.main600}>
                sign in
              </Link>{' '}
              if you have an account.
            </FormFooterText>
          </FormBodyFooter>
        </FormBody>
      </form>
    </StyledForm>
  );
};
