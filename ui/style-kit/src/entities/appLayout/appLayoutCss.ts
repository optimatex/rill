import { css } from '_employee/view';
import { surface } from '_employee/theme-meta';

import { columnLayoutCss, fullSizeFlexboxCss, rowLayoutCss } from 'features';

export const appLayoutCss = css`
  ${rowLayoutCss}
  ${fullSizeFlexboxCss}

  align-items: stretch;
`;

export const screenCss = css`
  ${surface}

  ${columnLayoutCss}
`;
