import { FC, IContainerProps, styled } from '_employee/view';
import { panelCss } from '_employee/style-kit';

import { Possition } from '@types';

interface IProps extends IContainerProps {
  border?: Possition;
}

export const Panel = styled.div`
  ${panelCss}
` as FC<IProps>;
