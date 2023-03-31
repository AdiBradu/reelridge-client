// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
// types
import { FormGroupProps } from '@mui/material/FormGroup';

const FormGroupStyled = styled(Stack)(() => ({
  gap: '40px',
  zIndex: 102,
}));

export const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
  console.log('FormGroup render');

  return <FormGroupStyled>{children}</FormGroupStyled>;
};
