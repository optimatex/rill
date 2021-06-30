import { css } from '_employee/view';
import { outline } from '_employee/theme-meta';

export const borderBottomCss = css`
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const borderTopCss = css`
  border-top-width: 1px;
  border-top-style: solid;
`;

export const borderLeftCss = css`
  border-left-width: 1px;
  border-left-style: solid;
`;

export const borderRightCss = css`
  border-right-width: 1px;
  border-right-style: solid;
`;

export const outlineCss = css`
  border-width: 1px;
  border-style: solid;

  ${outline}
`;

export const outlineSideCss = css`
  ${outlineCss}
  border-width: 0;

  ${(props) => (props.border ? `border-${props.border}-width: 1px;` : '')}
`;
