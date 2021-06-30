import { createNavMenuScheme } from '_employee/ui-kit';
import { form, connection, gallery } from '../_employee/icons-map';

export enum Keys {
  messages = 'messages',
  messageForm = 'messageForm',
}

export const navKeys = [Keys.messages, Keys.messageForm];

const icons = {};

const titlesMap = {
  [Keys.messages]: 'messages',
  [Keys.messageForm]: 'message Form',
};

export const menuPathScheme = navKeys.map((key) => `/${key}`);

export const menuScheme = createNavMenuScheme(
  icons,
  titlesMap,
  menuPathScheme,
  navKeys,
);
