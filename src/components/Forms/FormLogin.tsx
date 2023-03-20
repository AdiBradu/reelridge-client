import React, { useState, useEffect } from 'react';
// components
import { Input } from '../Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
// material ui
import { Box, Button, Typography, Stack, Link } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// types
import { UserLoginProps } from '../../types/types';
// redux
import { useAppDispatch } from '../../api/hooks/hooks';
import { setLoginUser, setUserName } from '../../api/features/auth/authSlice';
// routing
import { useNavigate } from 'react-router-dom';
// react query
import { useMutation } from 'react-query';
// api
import { loginUser } from '../../api/features/auth';

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

export const FormLogin: React.FC = () => {
  console.log('Form Login render');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserLoginProps>({
    email: '',
    password: '',
  });

  const {
    mutate: loginUserMutation,
    data,
    isLoading,
    error,
  } = useMutation((formData: UserLoginProps) => loginUser(formData));

  const handleLogin = () => {
    loginUserMutation(formData);
  };

  useEffect(() => {
    data && sessionStorage.setItem('token', data.token);
    data && sessionStorage.setItem('user', data.id);
    data && dispatch(setLoginUser());
    data && dispatch(setUserName(data.username));
    data &&
      setTimeout(() => {
        navigate('/watchlater');
      }, 1500);
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
      <form onSubmit={handleLogin}>
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
              <StyledButtonText variant="body1">Login</StyledButtonText>
            </StyledButton>
            <FormFooterText variant="caption">
              Please{' '}
              <Link href={'/register'} color={theme.palette.primary.main600}>
                sign up
              </Link>{' '}
              if you don't have an account.
            </FormFooterText>
          </FormBodyFooter>
        </FormBody>
      </form>
    </StyledForm>
  );
};
