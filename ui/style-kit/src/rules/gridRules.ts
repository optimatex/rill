import { css } from '_employee/view';

export const gridRule = css`
  width: ${(props) => (props.size / 12) * 100}%;
`;
