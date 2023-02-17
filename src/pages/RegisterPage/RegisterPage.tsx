import React, { useState, useEffect } from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Spinner } from '../../components/Spinner/Spinner';
import { FormRegister } from '../../components/Forms/FormRegister';
// material ui
import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// types
import { UserRegistrationProps } from '../../types/types';
// api
import { registerUser } from '../../api/features/auth';
// react query
import { useQuery } from 'react-query';
// ract-router-dom
import { useNavigate } from 'react-router-dom';

const FormGroup = styled(Stack)(() => ({
  gap: '40px',
}));

export const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<UserRegistrationProps>({
    username: '',
    email: '',
    password: '',
  });

  const { isLoading, isError, error, data, refetch } = useQuery(
    ['registerUser', formData],
    () => registerUser(formData),
    {
      enabled: false,
    },
  );

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

  const handleRegister = () => {
    refetch();
  };

  if (isLoading) return <Spinner />;

  return (
    <LayoutDefault>
      <FormGroup>
        <SectionTitle title="register" />
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
        <FormRegister
          onSubmit={handleRegister}
          formData={formData}
          onChange={handleChangeFormData}
        />
      </FormGroup>
    </LayoutDefault>
  );
};
