import { React, styled } from '_employee/view';

const Container = styled.a`
  display: block;
  text-decoration: none;
`;

export const SidebarLink = (props) => <Container>{props.text}</Container>;
