import { getTheme, getThemeContext } from 'test';

import { font, fontRule, setFont } from '.';

describe('theme', () => {
  // font
  it('font setters', () => {
    const newVal = {
      sideIndent: 12,
      fontSize: 14,
      fontFamily: 'openSans',
      fontWeight: 'bold',
    };

    const newTheme = setFont(newVal, getTheme());

    expect(newTheme.font).toEqual(newVal);
  });

  it('font getters', () => {
    // get int
    expect(font(getThemeContext())).toEqual({
      fontSize: 8,
      fontFamily: 'roboto',
      fontWeight: 'bolder',
    });
    // as direct call
    expect(fontRule('fontSize', getThemeContext())).toBe(8);
  });
});
