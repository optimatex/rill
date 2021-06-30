import { React } from '_employee/view';
import { render, mockMessages_1 } from 'test';
import Messages from '.';

describe('Messages', () => {
  it('should render without errors', () => {
    const { container } = render(<Messages messages={mockMessages_1} />);

    expect(container).toMatchSnapshot();
  });
});
