import { css } from '_employee/view';
import { button, buttonActive } from '_employee/theme-meta';

import { elementHeightPx } from '@constants';
import { elementFrameCss, outlineCss, centeredFlexboxCss } from 'features';

const commonButtonCss = css`
  ${centeredFlexboxCss}
  ${elementFrameCss}
  ${outlineCss}

  ${button}
`;

export const buticonCss = css`
  ${commonButtonCss}

  padding: 0;
  border-radius: 50px;
  width: ${elementHeightPx};
  height: ${elementHeightPx};
`;

export const buttonCss = css`
  ${commonButtonCss}

  padding-left: 8px;
  padding-right: 8px;
`;

export const buttonActiveCss = css`
  ${buttonCss}
  ${buttonActive}
`;
