export { reactAct, fireEvent, waitFor } from '@rill/view/test';

export * from './render';

export * from './factories';

export * from './utils';

export * from './mockData';

import { getTheme } from '@rill/style-kit/test';

const theme = getTheme();

export const cardSR = theme.card;
export const surfaceSR = theme.surface;
export const buttonSR = theme.button;
export const buttonActiveSR = theme.buttonActive;

export const fontSR = theme.font;
