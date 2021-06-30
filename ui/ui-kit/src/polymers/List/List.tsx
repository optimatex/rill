import { React, styled } from '_employee/view';
import { listCss } from '_employee/style-kit';

interface IStyledProps {
  testID: string;
}
interface IProps extends IStyledProps {
  data: unknown[];
  renderItem: (i: unknown) => JSX.Element;
}

export const ListContainer = styled.ul`
  ${listCss}
`;

export const List = ({ data, renderItem, testID }: IProps) => (
  <ListContainer data-testid={testID}>{data.map(renderItem)}</ListContainer>
);
