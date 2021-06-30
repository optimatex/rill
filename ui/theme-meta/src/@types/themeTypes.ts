import { ModeTypes } from './generalStyleTypes';

export enum ThemeKeys {
  Theme = 'theme',
}

export interface ITheme {
  mode: ModeTypes;
  [key: string]: unknown;
}

export interface IThemeContext {
  theme: ITheme;
}

export type ColoredThemeValue = {
  [key: string]: unknown;
};

export type ThemeValuesMap = {
  [key: string]: ColoredThemeValue;
};

export type ThemeGetter = () => ITheme;
