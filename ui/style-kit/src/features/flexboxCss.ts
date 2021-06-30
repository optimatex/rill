import { css } from '_employee/view';

const flexboxCommonCss = css`
  display: flex;
`;

export const fullSizeFlexboxCss = css`
  ${flexboxCommonCss}

  flex: 1;
`;

export const centeredFlexboxCss = css`
  ${flexboxCommonCss}

  align-items: center;
  justify-content: center;
`;

export const rowFlexboxCss = css`
  ${flexboxCommonCss}

  flex-direction: row;
  justify-content: flex-start;
`;

export const columnFlexboxCss = css`
  ${flexboxCommonCss}

  flex-direction: column;
  align-items: stretch;
`;
