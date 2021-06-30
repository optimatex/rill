import { React, styled } from '_employee/view';
import { buttonCss, buttonActiveCss, buticonCss } from '_employee/style-kit';

import { IIcon } from '@types';
import { Icon } from '../Icon';

type Handler = (e: React.MouseEvent) => void;

interface ITagProps {
  onClick: Handler;
}
interface IFormButtonsProps {
  // eslint-disable-next-line react/no-unused-prop-types
  type: 'submit' | 'reset';
  text: string;
}
// interface IButtonProps extends ITagProps {
//   text?: string;
//   children: RC;
// }
interface IButinconProps extends ITagProps {
  icon: IIcon;
}

export const Button = styled.button`
  ${buttonCss}
`;

export const ButtonActive = styled.button`
  ${buttonActiveCss}
`;

export const StyledButicon = styled.button`
  ${buticonCss}
`;

export const SubmitButton = (props: IFormButtonsProps) => (
  <ButtonActive type="submit">{props.text}</ButtonActive>
);

export const ResetButton = (props: IFormButtonsProps) => (
  <Button type="reset">{props.text}</Button>
);

// export const Button = (props: IButtonProps) => (
//   <Button {...props}>{props.children}</Button>
// );

export const Buticon = (props: IButinconProps) => (
  <StyledButicon onClick={props.onClick}>
    <Icon {...props.icon} />
  </StyledButicon>
);
