import { css } from '_employee/view';
import { frameRule } from '_employee/theme-meta';

import { gapSelector } from 'selectors';
import { rowFlexboxCss, columnFlexboxCss } from './flexboxCss';
import { noFrameCss } from './frameCss';

export const rowGapsCss = css`
  & > * {
    margin-right: ${frameRule('rowGap')}px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export const customRowGapsCss = css`
  & > * {
    margin-right: ${gapSelector}px;
  }
`;

export const columnGapsCss = css`
  & > * {
    margin-bottom: ${frameRule('columnGap')}px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const columnRoundedLayoutCss = css`
  > * {
    &:nth-child(1) {
      border-radius: 4px 4px 0 0;
    }

    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`;

export const childrenFrameOnlyCss = css`
  ${noFrameCss}
`;

export const rowLayoutCss = css`
  ${rowFlexboxCss}

  ${rowGapsCss}

  ${(props) => (props.pipe ? pipeRowLayoutCss : '')}
`;

export const pipeRowLayoutCss = css`
  align-items: center;
`;

export const columnLayoutCss = css`
  ${columnFlexboxCss}

  ${columnGapsCss}
`;
