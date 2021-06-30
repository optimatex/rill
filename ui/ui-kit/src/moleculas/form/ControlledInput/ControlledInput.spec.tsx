import { React } from '_employee/view';
import { render } from 'test';
import { ControlledInput } from '.';

describe('ControlledInput', () => {
  it('should render without errors', () => {
    const onChange = jest.fn();

    const { getAllByRole } = render(
      <ControlledInput
        name="test name"
        value="test value"
        onChange={onChange}
      />,
    );
    const el = getAllByRole('textbox');

    expect(el).toMatchSnapshot();
  });
});
