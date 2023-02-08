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
