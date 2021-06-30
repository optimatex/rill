import { React } from '_employee/view';
import { render } from 'test';
import { Paragraph } from '.';

describe('Paragraphs', () => {
  it('should render without errors', () => {
    const { getByText } = render(<Paragraph>Some content</Paragraph>);
    const el = getByText('Some content');

    expect(el).toMatchSnapshot();
  });
});
