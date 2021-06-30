import { React, FC, styled } from '_employee/view';
import {} from '_employee/style-kit';

import { controlledInputDefaultProps, IControlledInputProps } from '@types';

const StyledInput = styled.input.attrs((props: IControlledInputProps) => ({
  value: props.value,
  onChange: props.onChange,
}))`` as FC<IControlledInputProps>;

export const ControlledInput = (props: IControlledInputProps) => (
  <StyledInput {...props} />
);

ControlledInput.defaultProps = controlledInputDefaultProps;
