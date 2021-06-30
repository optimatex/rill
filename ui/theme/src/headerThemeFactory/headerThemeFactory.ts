import { themeExtenderFactory } from '_employee/theme-meta';
import { tidySidebarPack } from '_employee/theme-values-kit';

import { headerColoredMap } from '../themeValues';

export const headerThemeFactory = themeExtenderFactory(
  tidySidebarPack,
  headerColoredMap,
);
