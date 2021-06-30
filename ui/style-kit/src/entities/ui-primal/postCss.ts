import { css } from '_employee/view';

import {
  cardAppearanceCss,
  panelAppearanceCss,
  columnRoundedLayoutCss,
  rowFrameCss,
  childrenFrameOnlyCss,
  borderBottomCss,
} from 'features';

export const postContainerCss = css`
  ${columnRoundedLayoutCss}
  ${childrenFrameOnlyCss}
  ${cardAppearanceCss}
`;

export const postTitleCss = css`
  ${rowFrameCss}
  ${panelAppearanceCss}
  ${borderBottomCss}
`;
