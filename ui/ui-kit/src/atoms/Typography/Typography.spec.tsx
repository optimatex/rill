import { render } from 'test';
import { React } from '_employee/view';

import { P, H3 } from '.';

describe('Typography', () => {
  it('Heading_3 should render without errors', () => {
    const { getByText } = render(<H3>Title 3</H3>);
    const el = getByText('Title 3');

    expect(el).toMatchSnapshot();
  });

  it('Paragraph should render without errors', () => {
    const { getByText } = render(<P>Paragraph</P>);
    const el = getByText('Paragraph');

    expect(el).toMatchSnapshot();
  });
});
