import { useState, useEffect } from 'react';
// types
import { UserLoginProps } from '../types/types';
// redux
import { useAppDispatch } from '../api/hooks/hooks';
import { setLoginUser, setUserName } from '../api/features/auth/authSlice';
// routing
import { useNavigate } from 'react-router-dom';
// react query
import { useMutation } from 'react-query';
// api
import { loginUser } from '../api/features/auth';

export const useFormLogin = () => {
  console.log('useFormLogin render');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserLoginProps>({
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
    mutate: loginUserMutation,
    data,
    isLoading,
    error,
  } = useMutation((formData: UserLoginProps) => loginUser(formData));

  const handleLogin = () => {
    loginUserMutation(formData);
  };

  useEffect(() => {
    if (data) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user', data.id);
      dispatch(setLoginUser());
      dispatch(setUserName(data.username));
      setTimeout(() => {
        navigate('/watchlater');
      }, 1500);
    }
  }, [data]);

  return {
    isLoading,
    error,
    data,
    formData,
    handleChangeFormData,
    handleLogin,
  };
};
