import { React } from '_employee/view';
import { render, mockMessages_1 } from 'test';
import Chat from '.';

describe('Chat', () => {
  it('should render without errors', () => {
    const { container } = render(
      <Chat messages={mockMessages_1} onAddMessage={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
