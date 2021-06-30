import { FC, IContainerProps, styled } from '_employee/view';
import { trivialAppHeaderCss } from '_employee/style-kit';

interface ITrivialProps extends IContainerProps {
  height: number;
}

export const TrivialHeader = styled.header`
  ${trivialAppHeaderCss}

  height: ${(props: ITrivialProps) => props.height}px;
` as FC<ITrivialProps>;
