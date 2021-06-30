import { css } from '_employee/view';
import { font, cardRule } from '_employee/theme-meta';

export const paragraphCss = css`
  ${font}
`;

export const nameCss = css`
  ${font}

  flex: 1;
  text-decoration: none;
  color: ${cardRule('color')};
`;
