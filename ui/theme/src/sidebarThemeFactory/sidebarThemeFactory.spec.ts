import { getTheme } from 'test';
import { sidebarThemeFactory } from '.';

describe('mainThemeFactory', () => {
  it('should act as the factory', () => {
    // @ts-ignore
    expect(sidebarThemeFactory(getTheme)).toMatchSnapshot();
  });
});
