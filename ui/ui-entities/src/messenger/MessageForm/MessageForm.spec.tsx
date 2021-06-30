import { React } from '_employee/view';
import { render } from 'test';
import MessageForm from '.';

describe('MessageForm', () => {
  it('should render without errors', () => {
    const { container } = render(<MessageForm onAddMessage={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
