import { React } from '_employee/view';
import { render } from 'test';
import { MenuItem } from '.';

describe('MenuItem', () => {
  it('should render without errors', () => {
    const { container } = render(<MenuItem>Click me!</MenuItem>);

    expect(container).toMatchSnapshot();
  });
});
