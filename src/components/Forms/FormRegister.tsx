import React, { useState, useEffect } from 'react';
// components
import { Input } from '../Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
// material ui
import { Box, Button, Typography, Stack, Link } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// types
import { UserRegistrationProps } from '../../types/types';
// react query
import { useMutation } from 'react-query';
// api
import { registerUser } from '../../api/features/auth';
// routing
import { useNavigate } from 'react-router-dom';

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

export const FormRegister: React.FC = () => {
  console.log('Form Register render');
  const [formData, setFormData] = useState<UserRegistrationProps>({
    username: '',
    email: '',
    password: '',
  });

  const {
    mutate: registerUserMutation,
    data,
    isLoading,
    error,
  } = useMutation((formData: UserRegistrationProps) => registerUser(formData));

  const handleregister = () => {
    registerUserMutation(formData);
  };

  const navigate = useNavigate();

  useEffect(() => {
    data && setTimeout(() => navigate('/login'), 3000);
  }, [data]);

  const handleChangeFormData = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  if (isLoading) return <Spinner />;

  return (
    <StyledForm>
      <form onSubmit={handleregister}>
        <FormBody>
          {error instanceof Error && (
            <Typography variant="body1" color={theme.palette.error.light}>
              {error.message}
            </Typography>
          )}
          {data && (
            <Typography variant="body1" color={theme.palette.success.light}>
              {data.message}
            </Typography>
          )}
          <FormBodyInputs>
            <Input
              label="username"
              variant="outlined"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChangeFormData}
            />
            <Input
              label="email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChangeFormData}
            />
            <Input
              label="password"
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChangeFormData}
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
