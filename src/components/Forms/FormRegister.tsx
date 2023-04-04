import { useState, useEffect } from 'react';
// components
import { Input } from '../Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
import { MemoizedButtonForm } from '../Buttons/ButtonLogin/ButtonForm';
import { Status } from '../Status/Status';
// material ui
import { Box, Typography, Stack, Link } from '@mui/material';
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

export const FormRegister: React.FC = () => {
  console.log('Form Register render');
  const navigate = useNavigate();
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

  const handleChangeFormData = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    data && setTimeout(() => navigate('/login'), 3000);
  }, [data]);

  if (isLoading) return <Spinner />;

  return (
    <StyledForm>
      <form onSubmit={handleregister}>
        <FormBody>
          {error instanceof Error && (
            <Status text={error.message} color={theme.palette.error.light} />
          )}
          {data && <Status text={data.message} color={theme.palette.success.light} />}
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
            <MemoizedButtonForm type={'submit'} text={'register account'} />
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
