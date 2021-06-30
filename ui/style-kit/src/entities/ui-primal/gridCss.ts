import { css } from '_employee/view';

import { gapSelector } from 'selectors';
import {
  gridRowCss,
  gridrillRowCss,
  rowLayoutCss,
  customRowGapsCss,
  centeredFlexboxCss,
} from 'features';
import { gridRule } from 'rules';

const commonGridContainerCss = css`
  ${rowLayoutCss}
`;

export const gridRowContainerCss = css`
  ${commonGridContainerCss}

  ${gridRowCss}

  ${(props) =>
    gapSelector(props) ? customRowGapsCss : ''}

    ${(props) =>
    props.type === 'pipe' ? centeredFlexboxCss : ''}
`;

export const gridrillRowContainerCss = css`
  ${commonGridContainerCss}

  ${gridrillRowCss}
`;

export const gridColumnCss = css`
  ${gridRule}
`;
