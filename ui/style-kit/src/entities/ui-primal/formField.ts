import { css } from '_employee/view';

import {
  gridRowCss,
  columnLayoutCss,
  outlineCss,
  elementFrameCss,
  rowFlexboxCss,
  heirFontCss,
} from 'features';

const formFieldCommonCss = css`
  position: relative;
`;

export const formFieldFlatCss = css`
  ${formFieldCommonCss}

  ${gridRowCss}
  ${rowFlexboxCss}

  & > span {
    width: 25%;
    max-width: 150px;
    min-width: 100px;
  }
`;

export const formFieldColumnCss = css`
  ${formFieldCommonCss}

  ${columnLayoutCss}
`;

export const formLabelTextCss = css`
  ${heirFontCss}
`;

export const formFieldErrorCss = css`
  ${outlineCss}
  ${elementFrameCss}

  position: absolute;
  top: 95%;
  left: 0%;
  transform: translateX(15px);
  white-space: nowrap;

  background: red;
  color: #ffffff;
  z-index: 2;
`;
