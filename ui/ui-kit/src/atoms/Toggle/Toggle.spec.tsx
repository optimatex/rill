import { React } from '_employee/view';
import { render } from 'test';
import { Toggle } from '.';

const draw = (isActive: boolean, callback: () => void) =>
  render(<Toggle isActive={isActive} onPress={callback} />);

describe('Toggle', () => {
  it('should render without errors', () => {
    const callback = jest.fn();

    const { getByRole } = draw(false, callback);
    const el = getByRole('button');

    expect(el).toMatchSnapshot();
  });
});
