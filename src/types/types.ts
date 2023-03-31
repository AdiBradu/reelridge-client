import React, { MutableRefObject } from 'react';
import SwiperCore from 'swiper';
// material ui
// import { Butt } from '@mui/system';
import { ButtonProps } from '@mui/material';

export interface Routes {
  path: string;
  index?: boolean;
  redirect?: string | undefined;
  element?: JSX.Element | undefined;
}

export interface LayoutProps {
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
  id: number;
  title?: string | undefined;
  release_date?: string | undefined;
  image_path?: string | undefined;
  overview?: string | undefined;
  rating?: string | undefined;
  votes?: string | undefined;
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

export interface PostersSliderProps extends MovieProps {
  movies?: UpcomingProps[];
  activeSlide: number;
  pageNumber?: number;
  handleActiveSlide?: (index: number) => void;
  handlePageNumber?: (number: number) => void;
}

export interface MovieProps {
  movie: UpcomingProps;
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

export interface FormGroupProps {
  children: React.ReactNode | React.ReactNode[];
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

export interface StatusProps {
  text: string;
  color: string | undefined;
}

export interface ButtonLoadMoreProps {
  pageNumber?: number;
  handlePageNumber?: (number: number) => void;
}

export interface ButtonSwiperProps {
  direction: 'left' | 'right';
  handleSwiperNavigation: (direction: string) => void;
}

export interface ButtonFormProps extends ButtonProps {
  text?: string;
}
