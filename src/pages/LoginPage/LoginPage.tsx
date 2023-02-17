import React, { useState, useEffect } from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Spinner } from '../../components/Spinner/Spinner';
import { FormLogin } from '../../components/Forms/FormLogin';
// material ui
import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// types
import { UserLoginProps } from '../../types/types';
// api
import { loginUser } from '../../api/features/auth';
// react query
import { useQuery } from 'react-query';
// redux
import { useAppDispatch } from '../../api/hooks/hooks';
import { setLoginUser } from '../../api/features/auth/authSlice';

const FormGroup = styled(Stack)(() => ({
  gap: '40px',
}));

export const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<UserLoginProps>({
    email: '',
    password: '',
  });

  const { isLoading, isError, error, data, refetch } = useQuery(
    ['loginUser', formData],
    () => loginUser(formData),
    {
      enabled: false,
    },
  );

  useEffect(() => {
    data && sessionStorage.setItem('token', data.token);
    // data && dispatch(setLoginUser());
  }, [data]);

  const handleChangeFormData = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = () => {
    refetch();
    dispatch(setLoginUser());
  };

  if (isLoading) return <Spinner />;

  return (
    <LayoutDefault>
      <FormGroup>
        <SectionTitle title="login" />
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
        <FormLogin
          onSubmit={handleLogin}
          formData={formData}
          onChange={handleChangeFormData}
        />
      </FormGroup>
    </LayoutDefault>
  );
};
