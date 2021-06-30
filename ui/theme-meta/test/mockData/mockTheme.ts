import { clone } from '@rill/utils';
import { themeFactory } from '../../src';

import { mockThemeValuesMap, mockThemeValuesMap_2 } from './mockThemeValuesMap';
import { shapeThemeValues } from './mockThemeShapeValues';

const mockTheme = {
  mode: 'dark',
  ...shapeThemeValues,
  ...mockThemeValuesMap['dark'],
};

const mockTheme_2 = {
  mode: 'dark',
  ...shapeThemeValues,
  ...mockThemeValuesMap['dark'],
};

const mockThemeContext = {
  theme: mockTheme,
};

const mockThemeContext_2 = {
  theme: mockTheme,
};

export const getTheme = () => clone(mockTheme);

export const getThemeContext = () => clone(mockThemeContext);

export const getTheme_2 = () => clone(mockTheme_2);

export const getThemeContext_2 = () => clone(mockThemeContext_2);

export const themeValuesAfterSetting_2 = {
  ...mockTheme,
  ...mockThemeValuesMap_2.dark,
};

export const mockThemeFactory = themeFactory(
  shapeThemeValues,
  mockThemeValuesMap,
);
