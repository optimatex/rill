import { styled } from '_employee/view';
import { paragraphCss, nameCss } from '_employee/style-kit';

export const P = styled.p`
  ${paragraphCss}
`;

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3`
  margin: 0;
  line-height: 1rem;
  font-family: 'open-sans-regular';
`;

export const Name = styled.span`
  ${nameCss}
`;
