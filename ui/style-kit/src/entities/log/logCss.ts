import { css } from '_employee/view';

import { buttonCss } from '../ui-primal';
import { centeredFlexboxCss } from 'features';

export const logCss = css`
  ${centeredFlexboxCss}

  padding: 5px;
  border-radius: 50px;
`;

export const hintableLogCss = css`
  ${buttonCss}

  padding: 7px 12px;
  border-radius: 50px;
  position: relative;

  & > span {
    margin-right: 12px;
  }
`;
