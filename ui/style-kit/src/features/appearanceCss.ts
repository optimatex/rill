import { css } from '_employee/view';
import { card, panel, button } from '_employee/theme-meta';

import { outlineCss } from './outlineCss';

export const cardAppearanceCss = css`
  ${outlineCss}

  ${card}
`;

export const panelAppearanceCss = css`
  ${panel}
`;

export const buttonAppearanceCss = css`
  ${outlineCss}

  ${button}
`;

export const nameAppearanceCss = css``;
