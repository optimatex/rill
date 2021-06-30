import { css } from '_employee/view';
import { surface, column } from '_employee/theme-meta';

import { columnLayoutCss, fullSizeFlexboxCss } from 'features';

const columntCommonCss = css`
  ${columnLayoutCss}
  ${fullSizeFlexboxCss}

  ${column}
`;

export const flatColumnCss = css`
  ${columntCommonCss}

  ${surface}
`;

export const mainColumnCss = css`
  ${columntCommonCss}
`;

export const sidebarColumnCss = css`
  ${columntCommonCss}
`;
