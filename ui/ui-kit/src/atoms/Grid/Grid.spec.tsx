import { React } from '_employee/view';
import { render, text_1 } from 'test';
import { Row, rillRow } from '.';

describe('Grid', () => {
  it('Row', () => {
    const { getAllByText } = render(<Row>{text_1}</Row>);
    const el = getAllByText(text_1);

    expect(el).toMatchSnapshot();
  });

  it('rillRow', () => {
    const { getAllByText } = render(<rillRow>{text_1}</rillRow>);
    const el = getAllByText(text_1);

    expect(el).toMatchSnapshot();
  });
});
