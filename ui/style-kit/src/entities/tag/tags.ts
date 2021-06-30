import { css } from '_employee/view';

export const tag = css`
  background: var(--button--simple);
  color: var(--main-font);
  margin: 4px;
  padding: 3px 6px;
  text-decoration: none;

  &:hover,
  &:focus {
    background: var(--button--simple--hover);
    color: var(--accent-font);
  }
`;

export const tagsList = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
