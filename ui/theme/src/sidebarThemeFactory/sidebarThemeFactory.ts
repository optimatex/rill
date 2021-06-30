import { themeExtenderFactory } from '_employee/theme-meta';
import { tidySidebarPack } from '_employee/theme-values-kit';

import { barColoredMap } from '../themeValues';

export const sidebarThemeFactory = themeExtenderFactory(
  tidySidebarPack,
  barColoredMap,
);
