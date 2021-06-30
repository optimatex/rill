import { React, styled } from '_employee/view';
import {
  toggleContainerCss,
  toggleContainerActiveCss,
  toggleRoundCss,
  toggleRoundActiveCss,
} from '_employee/style-kit';

import { IActivateable } from '@types';

export const ToggleContainer = styled.button`
  ${(props) => (props.isActive ? toggleContainerCss : toggleContainerActiveCss)}
`;

export const ToggleRound = styled.div`
  ${(props) => (props.isActive ? toggleRoundActiveCss : toggleRoundCss)}
`;

export const Toggle = ({ isActive, onPress }: IActivateable) => (
  <ToggleContainer isActive={isActive} onClick={onPress}>
    <ToggleRound isActive={isActive} />
  </ToggleContainer>
);
