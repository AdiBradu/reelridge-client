import React from 'react';
// material ui
import { BoxProps } from '@mui/system';

export interface Routes {
  path: string;
  index?: boolean;
  redirect?: string | undefined;
  element?: JSX.Element;
  children?: {
    index?: boolean;
    path?: string;
    element: JSX.Element;
  }[];
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
  data: UpcomingProps[] | undefined;
  handleActiveSlide: (index: number) => void;
  handlePageNumber: () => void;
  activeSlide: number;
}

export interface StyledTitleBoxProps extends BoxProps {
  trigger?: number | undefined;
}
