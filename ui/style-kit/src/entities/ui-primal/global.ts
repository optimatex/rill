import { css } from '_employee/view';
import { surface, font } from '_employee/theme-meta';

export const topContainerCss = css`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const htmlCss = css`
  ${surface}

  ${topContainerCss}
`;

export const bodyCss = css`
  ${surface}

  ${topContainerCss}
  ${font}
`;
