import { React, RC, styled } from '_employee/view';
import { paragraphCss } from '_employee/style-kit';

interface IProps {
  index?: number;
  children: RC;
}

const P = styled.p`
  ${paragraphCss}
`;

export const Paragraph = (props: IProps) => (
  <P key={props.index}>{props.children}</P>
);
