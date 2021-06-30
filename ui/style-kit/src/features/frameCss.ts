import { css } from '_employee/view';
import { frameRule } from '_employee/theme-meta';

const commonFrameCss = css`
  box-sizing: border-box;
`;

export const noFrameCss = css`
  padding: 0;
`;

export const rowSideFrameCss = css`
  ${commonFrameCss}

  padding-left: ${frameRule('sideIndent')}px;
  padding-right: ${frameRule('sideIndent')}px;
`;

export const rowFrameCss = css`
  ${commonFrameCss}

  padding: ${frameRule('verticalIndent')}px ${frameRule('sideIndent')}px;
`;

export const elementFrameCss = css`
  ${commonFrameCss}

  padding: 4px 8px;
`;
