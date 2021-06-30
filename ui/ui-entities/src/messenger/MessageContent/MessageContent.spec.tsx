import { React } from '_employee/view';
import { render, mockHtmlString_1 } from 'test';
import MessageContent from '.';

describe('MessageContent', () => {
  it('should render without errors', () => {
    const { container } = render(<MessageContent html={mockHtmlString_1} />);

    expect(container).toMatchSnapshot();
  });
});
