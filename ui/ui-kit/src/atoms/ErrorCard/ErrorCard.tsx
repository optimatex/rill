import { React, FC, styled } from '_employee/view';
import { cardContainerCss } from '_employee/style-kit';

import { ITagProps, ITextProps } from '@types';

const Container = styled.div`
  ${cardContainerCss}
` as FC<ITagProps>;

export const ErrorCard = (props: ITextProps) => (
  <Container data-testid="error-boundary/card">{props.text}</Container>
);
