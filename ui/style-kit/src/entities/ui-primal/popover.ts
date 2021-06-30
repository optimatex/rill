import { css } from '_employee/view';

export const popoverCss = css`
  position: absolute;
  bottom: calc(100% + 5px);
  left: 0;
  border: 1px solid #333;
  background: #000;
  padding: 10px 0;
`;

// &:before {
//   content: ' ';
//   transform: translate(-10px, 7px) rotate(-45deg);
//   box-shadow: 1px -1px 1px var(--shadow-inset);
//   border-bottom-color: #333;
//   border-bottom-width: 6px;
//   border-bottom-color: #333;
//   border-top-color: #000;
//   border-top-style: solid;
//   border-top-width: 6px;
//   border-left-color: #000;
//   border-left-style: solid;
//   border-left-width: 6px;
//   border-right-color: rgb(36, 37, 38);
//   border-right-style: solid;
//   border-right-width: 6px;
//   border-top-color: rgb(36, 37, 38);
//   border-top-style: solid;
//   border-top-width: 6px;
//   height: 0px;
//   line-height: 16.08px;
//   position: absolute;
//   right: 0px;
//   transform: matrix(0.707107, -0.707107, 0.707107, 0.707107, -10, 7);
//   width: 0px;
