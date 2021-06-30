// @ts-nocheck
import { styled } from '_employee/view';
import { path, prop } from '_employee/utils';

import { IIcon } from '@types';

interface IProps extends IIcon {
  'data-testid': string;
}

export const Icon = styled.i.attrs((props: IProps) => ({
  className: `icon-${props.name}`,
}))`
  &::before {
    font-size: ${(props: IProps) => props.size}px;
    position: relative;
    color: ${prop(['color'])};
    top: ${path(['possition', 'top'])}px;
    bottom: ${path(['possition', 'bottom'])}px;
    left: ${path(['possition', 'left'])}px;
    right: ${path(['possition', 'right'])}px;
  }
`;
