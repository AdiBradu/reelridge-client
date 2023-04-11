import { useState, useEffect } from 'react';
// types
import { UserRegistrationProps } from '../types/types';
// react query
import { useMutation } from 'react-query';
// api
import { registerUser } from '../api/features/auth';
// routing
import { useNavigate } from 'react-router-dom';

export const useFormRegister = () => {
  console.log('useFormRegister render');
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserRegistrationProps>({
    username: '',
    email: '',
    password: '',
  });

  const handleChangeFormData = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const {
    mutate: registerUserMutation,
    data,
    isLoading,
    error,
  } = useMutation((formData: UserRegistrationProps) => registerUser(formData));

  const handleregister = () => {
    registerUserMutation(formData);
  };

  useEffect(() => {
    data && setTimeout(() => navigate('/login'), 3000);
  }, [data]);

  return { isLoading, error, data, formData, handleChangeFormData, handleregister };
};
