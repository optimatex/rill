export type Color = string;

export type NumericSize = number;

export type ThemeValue = NumericSize;

export type ThemeModeValue = Color;

export enum ModeTypes {
  Dark = 'dark',
  Light = 'light',
}

// Interfaces

export type IShapeInt = {
  sideIndent: NumericSize;
  lineHeight: NumericSize;
  fontSize: NumericSize;
  fontFamily: string;
  fontWeight: 'normal' | 'bolder' | 'bold';
};

export type IColorInt = {
  background: Color;
  color: Color;
};
