import { css } from '_employee/view';
import { surface } from '_employee/theme-meta';

import { panelAppearanceCss, outlineSideCss } from 'features';

export const panelCss = css`
  ${outlineSideCss}

  ${panelAppearanceCss}
`;

export const fixedPanelCss = css`
  ${surface}
  position: fixed;
  padding: 14px 14px;
  border-radius: 4px;
  border-color: #555;
  box-shadow: 1px 1px 13px #100f2691;
`;
