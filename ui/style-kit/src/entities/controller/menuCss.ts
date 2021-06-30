import { css } from '_employee/view';

import { elementFrameCss, columnLayoutCss } from 'features';

export const activeMenuItemCss = css``;

export const menuItemCss = css`
  ${elementFrameCss}

  color: inherit;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    ${activeMenuItemCss}
  }

  & > i {
    margin-right: 12px;
  }
`;

export const menuWrapCss = css`
  ${columnLayoutCss}
`;
