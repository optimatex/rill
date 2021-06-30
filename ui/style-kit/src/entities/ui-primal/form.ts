import { css } from '_employee/view';
import { input } from '_employee/theme-meta';

import { outlineCss, elementFrameCss } from 'features';

export const inputCss = css`
  ${elementFrameCss}
  ${outlineCss}

  ${input}

  width: 100%;

  &:hower {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.9;
  }
  &:focus {
    opacity: 1;
  }
`;
