import { assocPath, curry } from '../_employee/utils';

import { CssRule, IntKeys, IThemeContext } from '../@types';

export const int = (name: IntKeys) => {
  const get = (themeContext: IThemeContext) => themeContext.theme[name];

  const getRule = (rule: CssRule, themeContext: IThemeContext) =>
    get(themeContext)[rule];

  const setter: any = assocPath([name]);

  return [get, curry(getRule), setter];
};
