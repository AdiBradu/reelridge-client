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
