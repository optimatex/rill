import { React } from '_employee/view';
import { render, mockMenuScheme_1 } from 'test';
import { Controls } from '.';

describe('Controls', () => {
  it('should render without errors', () => {
    const { getAllByRole } = render(<Controls scheme={mockMenuScheme_1} />);
    const el = getAllByRole('button');

    expect(el).toMatchSnapshot();
  });
});
