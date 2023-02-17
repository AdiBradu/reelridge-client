import React from 'react';
// material ui
import { BoxProps } from '@mui/system';

export interface Routes {
  path: string;
  index?: boolean;
  redirect?: string | undefined;
  element?: JSX.Element | undefined;
}

export interface LayoutDefaultProps {
  children: JSX.Element | JSX.Element[];
}

export interface SectionTitleProps {
  title: string;
}

export interface MenuProps {
  toggleDrawer: (
    isOpen: boolean,
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface MenuItemProps {
  name: string;
  icon: JSX.Element;
  url: string;
}

export interface UpcomingProps {
  id?: number;
  title?: string;
  release_date?: Date;
  image_path?: string;
  overview?: string;
  rating?: number;
  votes?: number;
}

export interface TextProps {
  text: React.ReactNode;
}

export interface TitleProps extends TextProps {
  id?: string | undefined;
}

export interface AutoScrollProps {
  id: string;
  movie: number | undefined;
}

export interface ImagePathsProps {
  imagePaths: (string | undefined)[] | undefined;
}

export interface PostersSliderProps {
  upcomings: UpcomingProps[] | undefined;
  handleActiveSlide: (index: number) => void;
  handlePageNumber: () => void;
  activeSlide: number;
  // activeMovie: UpcomingProps;
}

export interface StyledTitleBoxProps extends BoxProps {
  trigger?: number | undefined;
}

export interface UserRegistrationProps {
  username: string;
  email: string;
  password: string;
}

export interface UserLoginProps {
  email: string;
  password: string;
}

export interface InputProps {
  variant: 'outlined' | 'filled' | 'standard' | undefined;
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onSubmit: () => void;
}
export interface FormRegisterProps extends FormProps {
  formData: UserRegistrationProps;
}

export interface FormLoginProps extends FormProps {
  formData: UserLoginProps;
}
