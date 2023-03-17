import axios from 'axios';
// types
import { UserRegistrationProps, UserLoginProps } from '../../../types/types';

export const registerUser = async ({
  username,
  email,
  password,
}: UserRegistrationProps) => {
  try {
    const response = await axios.post(
      'http://localhost:5050/register',
      {
        data: {
          username: username,
          email: email,
          password: password,
        },
      },
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:5173',
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error('Error creating user. Please try again!');
  }
};

export const loginUser = async ({ email, password }: UserLoginProps) => {
  try {
    const response = await axios.post(
      'http://localhost:5050/login',
      {
        data: {
          email: email,
          password: password,
        },
      },
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:5173',
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error('Login failed. Please try again!');
  }
};
