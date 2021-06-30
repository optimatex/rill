import { curry } from '../_employee/utils';

import { ThemeValuesMap, ITheme } from '../@types';

export const themeFactory = curry(
  (
    shapeThemeValues: ThemeValuesMap,
    themeValuesMap: ThemeValuesMap,
    mode: 'dark' | 'light',
  ) => ({
    ...shapeThemeValues,
    ...themeValuesMap[mode],
    mode,
  }),
);

export const themeExtenderFactory = curry(
  (
    newShapeThemeValues: ThemeValuesMap,
    newThemeValuesMap: ThemeValuesMap,
    theme: ITheme,
  ) => ({
    ...theme,
    ...newShapeThemeValues,
    ...newThemeValuesMap[theme.mode],
  }),
);
