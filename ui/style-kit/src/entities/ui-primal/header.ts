import { css } from '_employee/view';
import { surface } from '_employee/theme-meta';

import { rowFrameCss, rowLayoutCss } from 'features';

export const trivialAppHeaderCss = css`
  ${surface}

  ${rowFrameCss}
  ${rowLayoutCss}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  z-index: 30;
`;
