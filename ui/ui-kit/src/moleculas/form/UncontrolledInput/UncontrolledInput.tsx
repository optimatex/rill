import { FC, styled } from '_employee/view';
import { inputCss } from '_employee/style-kit';

import { uncontrolledInputDefaultProps, IUncontrolledInputProps } from '@types';

export const UncontrolledInput = styled.input`
  ${inputCss}
` as FC<IUncontrolledInputProps>;

UncontrolledInput.defaultProps = uncontrolledInputDefaultProps;
