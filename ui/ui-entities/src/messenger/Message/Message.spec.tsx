import { React } from '_employee/view';
import { render, mockMessage_1 } from 'test';
import Message from '.';

describe('Message', () => {
  it('should render without errors', () => {
    const { container } = render(<Message {...mockMessage_1} />);

    expect(container).toMatchSnapshot();
  });
});
