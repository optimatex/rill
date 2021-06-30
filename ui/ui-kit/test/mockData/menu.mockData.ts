import {
  IMenuRawScheme,
  INavRawScheme,
  IMenuFullScheme,
} from '../../src/@types';

import { iconModel_1, iconModel_2, iconModel_3 } from './icon.mockData';

const menu_key_1 = 'play';
const menu_key_2 = 'pause';
const menu_key_3 = 'next';

export const menu_title_1 = 'Play track';
export const menu_title_2 = 'Pause track';
export const menu_title_3 = 'Next track';

export const menu_path_1 = '/users/32';
export const menu_path_2 = '/collections/53';
export const menu_path_3 = '/feeds/4';

export const menuItemRawScheme_1: IMenuRawScheme = {
  key: menu_key_1,
  icon: iconModel_1,
  title: menu_title_1,
};

export const menuItemRawScheme_2: IMenuRawScheme = {
  key: menu_key_2,
  icon: iconModel_2,
  title: menu_title_2,
};

export const menuItemRawScheme_3: IMenuRawScheme = {
  key: menu_key_3,
  icon: iconModel_3,
  title: menu_title_3,
};

export const mockMenuRawScheme_1: IMenuRawScheme[] = [
  menuItemRawScheme_1,
  menuItemRawScheme_2,
  menuItemRawScheme_3,
];

export const mockMenuScheme_1: IMenuFullScheme[] = mockMenuRawScheme_1.map(
  (item: IMenuFullScheme) => ({ ...item, handler: () => null }),
);

// Nav

export const mockNavMenuSchemeItem_1: INavRawScheme = {
  ...menuItemRawScheme_1,
  path: menu_path_1,
};

export const mockNavMenuSchemeItem_2: INavRawScheme = {
  ...menuItemRawScheme_2,
  path: menu_path_2,
};

export const mockNavMenuSchemeItem_3: INavRawScheme = {
  ...menuItemRawScheme_3,
  path: menu_path_3,
};

export const mockNavMenuScheme_1: INavRawScheme[] = [
  mockNavMenuSchemeItem_1,
  mockNavMenuSchemeItem_2,
  mockNavMenuSchemeItem_3,
];

export const mockMenuIconsMap = {
  [menu_key_1]: iconModel_1,
  [menu_key_2]: iconModel_2,
  [menu_key_3]: iconModel_3,
};

export const mockMenuTitlesMap = {
  [menu_key_1]: menu_title_1,
  [menu_key_2]: menu_title_2,
  [menu_key_3]: menu_title_3,
};

export const mockMenupathsMap = {
  [menu_key_1]: menu_path_1,
  [menu_key_2]: menu_path_2,
  [menu_key_3]: menu_path_3,
};

export const mockMenuMap = [menu_key_1, menu_key_2, menu_key_3];

// export const mockMenuScheme = []
