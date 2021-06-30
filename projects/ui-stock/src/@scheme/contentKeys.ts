import { createNavMenuScheme } from '../_employee/ui-kit';
import { form, connection, gallery } from '../_employee/icons-map';

export const navKeys = ['forms', 'buttons', 'gallery'];

const icons = {
  forms: form(1),
  buttons: connection(1),
  gallery: gallery(1),
};

const titlesMap = {
  forms: 'forms',
  buttons: 'buttons',
  gallery: 'gallery',
};

export const menuPathScheme = navKeys.map((key) => `/${key}`);

export const menuScheme = createNavMenuScheme(
  icons,
  titlesMap,
  menuPathScheme,
  navKeys,
);
