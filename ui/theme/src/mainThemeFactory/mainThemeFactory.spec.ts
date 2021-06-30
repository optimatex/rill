import { mainThemeFactory } from '.';

describe('mainThemeFactory', () => {
  it('should act as the factory', () => {
    expect(mainThemeFactory('dark')).toMatchSnapshot();
  });
});
