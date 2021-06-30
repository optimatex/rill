import { React, styled } from '_employee/view';
import { dualLogoCss } from '_employee/style-kit';

interface IProps {
  text: string;
}

export const StyledDualLogo = styled.div`
  ${dualLogoCss}
`;

export const DualLogo = ({ text }: IProps) => (
  <StyledDualLogo>{text}</StyledDualLogo>
);
