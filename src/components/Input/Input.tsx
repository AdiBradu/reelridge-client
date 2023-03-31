// material ui
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
// types
import { InputProps } from '../../types/types';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: theme.palette.secondary.main600,
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main200,
  },
}));

export const Input: React.FC<InputProps> = ({
  variant,
  label,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <StyledTextField
      variant={variant}
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
