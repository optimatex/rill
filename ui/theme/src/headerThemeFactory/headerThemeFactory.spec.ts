import { getTheme } from 'test';
import { headerThemeFactory } from '.';

describe('mainThemeFactory', () => {
  it('should act as the factory', () => {
    // @ts-ignore
    expect(headerThemeFactory(getTheme)).toMatchSnapshot();
  });
});
