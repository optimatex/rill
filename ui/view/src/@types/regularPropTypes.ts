import { ReactChild, ReactChildren } from 'react';

export type RC =
  | JSX.Element
  | JSX.Element[]
  | ReactChild
  | ReactChild[]
  | ReactChildren
  | ReactChildren[]
  | string
  | string[];

export interface IContainerProps {
  children: RC;
}

export type TestIdSetter = (p: ReactProps) => ReactProps;

export type ReactProps = {
  [key: string]: unknown;
};
