import { css } from '_employee/view';

export const imagesLayoutItemCss = css`
  grid-column-start: auto;
  grid-row-start: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const imagesGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 32.9%));
  grid-gap: 0.5%;
  display: grid;
  grid-gap: 0.5%;
  grid-template-columns: repeat(auto-fit, minmax(32.7%, 1fr));
  /* grid-auto-rows: 150px;
  grid-auto-flow: row dense; */
`;
