import { IContainerProps, FC, styled } from '_employee/view';
import { cardContainerCss } from '_employee/style-kit';

import { withDefaultId, cardId } from 'utils';

// Pieces
export const Card = styled.section`
  ${cardContainerCss}
` as FC<IContainerProps>;

withDefaultId(cardId, Card);
