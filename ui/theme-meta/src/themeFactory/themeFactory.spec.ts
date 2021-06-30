import {
  getTheme,
  mockThemeValuesMap,
  mockThemeValuesMap_2,
  shapeThemeValues,
  themeValuesAfterSetting_2,
} from 'test';

import { themeFactory, themeExtenderFactory } from '.';

describe('themeFactory', () => {
  it('themeFactory() should return proper object', () => {
    // @ts-ignore
    const factory = themeFactory(shapeThemeValues, mockThemeValuesMap);
    const value = factory('dark');
    const desired = getTheme();

    expect(value).toEqual(desired);
  });

  it('themeExtenderFactory() with only valuesMap provided', () => {
    const theme = getTheme();
    // @ts-ignore
    const value = themeExtenderFactory(null, mockThemeValuesMap_2, theme);

    expect(value).toMatchSnapshot();
  });
});
