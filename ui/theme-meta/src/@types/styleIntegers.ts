import { IShapeInt, IColorInt } from './generalStyleTypes';

export type CssRule = string;

export type IntKeys = string;

export type Row = {};

export type Font = Pick<IShapeInt, 'fontFamily' | 'fontSize' | 'fontWeight'>;

export type NewConstValue = Row | Font;

export type NewModeValue = Button | Card | Surface;

// Color mode Dependent

export type Button = Pick<IColorInt, 'background' | 'color'>;

export type Card = Pick<IColorInt, 'background'>;

export type Surface = Pick<IColorInt, 'background'>;
