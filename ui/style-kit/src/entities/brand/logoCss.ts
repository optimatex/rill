import { css } from '_employee/view';
import { surfaceRule } from '_employee/theme-meta';

import { centeredFlexboxCss } from 'features';

export const dualLogoCss = css`
  ${centeredFlexboxCss}

  color: ${surfaceRule('color')};
  font-size: 1.1rem;
  font-weight: bolder;
`;
