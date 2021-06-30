import { LegacyRef, IContainerProps, FormEvent } from '_employee/view';

import { IComponentProps, ITagProps } from './basePropTypes';
import { IBinaryLayout } from './layoutPropTypes';

// Handlers

export type FormSubmit = (e: FormEvent) => void;

// Elements props

interface IInputProps {
  id?: string;
  type?: string;
  name: string;
  placeholder?: string;
  // onFocus: (e: React.MouseEvent) => void;
  // onBlur: (e: React.MouseEvent) => void;
}

export interface IControlledInputProps extends IInputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IUncontrolledInputProps extends IInputProps {
  ref: LegacyRef<HTMLInputElement>;
  defaultValue?: string;
}

export interface IFieldProps extends IBinaryLayout, IContainerProps {
  name: string;
  label?: string;
  error?: string;
}

export interface IFormProps extends IContainerProps, ITagProps {
  onSubmit: FormSubmit;
}
