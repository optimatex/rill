import { css } from '_employee/view';
import { font } from '_employee/theme-meta';

import { rowLayoutCss, columnLayoutCss } from 'features';

export const stringValueCss = css`
  ${font}
`;

export const numberValueCss = css`
  ${font}
`;

export const booleanValueCss = css`
  ${font}
`;

export const emptyValueCss = css`
  ${font}
`;

export const arrayWrapCss = css`
  ${rowLayoutCss}
`;

export const arrayItemCss = css`
  margin-right: 10px;

  &::last-child {
    margin-right: 0;
  }
`;

export const objectKeyCss = css`
  ${font}

  margin-right: 15px;
  width: 80px;
  justify-content: center;
  background: #282856;
`;

export const objectWrapCss = css`
  ${columnLayoutCss}
`;

export const objectPairCss = css`
  ${rowLayoutCss}

  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 0 15px;
  background: #0a0a10;
`;
