import { css } from '_employee/view';

import { outlineCss } from 'features';
import { inputCss } from './form';

const roundHeight = 14;
const containerHeight = roundHeight + 10;
const containerWidth = roundHeight * 3;
const roundOffset = 3;
const leftPos = containerWidth - roundHeight - roundOffset * 2;
const radius = 50;

export const toggleContainerCss = css`
  ${inputCss}

  position: relative;
  padding: 0;
  width: ${containerWidth}px;
  height: ${containerHeight}px;
  border-radius: ${radius}px;
`;

export const toggleContainerActiveCss = css`
  ${toggleContainerCss}
`;

export const toggleRoundCss = css`
  ${outlineCss}

  position: absolute;
  top: ${roundOffset}px;
  left: ${roundOffset}px;
  height: ${roundHeight}px;
  width: ${roundHeight}px;
  border-radius: ${radius}px;
  background-color: blue;
  transition: left 0.5s 0s;
`;

export const toggleRoundActiveCss = css`
  ${toggleRoundCss}

  left: ${leftPos}px;
  background-color: pink;
`;
