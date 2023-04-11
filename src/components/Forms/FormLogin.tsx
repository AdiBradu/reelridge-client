// components
import { Input } from '../Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
import { Status } from '../Status/Status';
import { MemoizedButtonForm } from '../Buttons/ButtonLogin/ButtonForm';
// material ui
import { Box, Typography, Stack, Link } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// hooks
import { useFormLogin } from '../../hooks/useFormLogin';

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

export const FormLogin: React.FC = () => {
  console.log('Form Login render');
  const { isLoading, error, data, formData, handleChangeFormData, handleLogin } =
    useFormLogin();

  if (isLoading) return <Spinner />;

  return (
    <StyledForm>
      <form onSubmit={handleLogin}>
        <FormBody>
          {error instanceof Error && (
            <Status text={error.message} color={theme.palette.error.light} />
          )}
          {data && <Status text={data.message} color={theme.palette.success.light} />}
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
            <MemoizedButtonForm type={'submit'} text={'login'} />
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
