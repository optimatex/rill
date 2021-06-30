import { React } from '_employee/view';
import { render } from 'test';
import Buttons from '.';

describe('Interactive', () => {
  it('should render without errors', () => {
    const { getByRole } = render(<Buttons />);
    const el = getByRole('');

    expect(el).toMatchSnapshot();
  });
});
