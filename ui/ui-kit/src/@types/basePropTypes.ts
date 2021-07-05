import { RC } from '_employee/view';

export type TestIdSetter = (p: ReactProps) => ReactProps;

export type ReactProps = {
  [key: string]: unknown;
};

export interface ITagProps {
  'data-testid': string;
}

export interface IComponentProps {
  testId: string;
}

export interface ITextProps {
  text: string;
}

export interface IPostProps {
  title?: string;
  'data-testid'?: string;
  children: RC;
}
