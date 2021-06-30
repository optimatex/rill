import { FC, styled } from '_employee/view';
import {
  gridRowContainerCss,
  gridrillRowContainerCss,
  gridColumnCss,
} from '_employee/style-kit';

import { IRowLayout } from '@types';

export const Row = styled.div`
  ${gridRowContainerCss}
` as FC<IRowLayout>;

export const rillRow = styled.div`
  ${gridrillRowContainerCss}
`;

export const Col = styled.div`
  ${gridColumnCss}
`;
