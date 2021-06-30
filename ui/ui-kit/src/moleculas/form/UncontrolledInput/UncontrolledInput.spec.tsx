import { React } from '_employee/view';
import { render } from 'test';
import { UncontrolledInput } from '.';

describe('UncontrolledInput', () => {
  it('should render without errors', () => {
    const { getAllByRole } = render(
      <UncontrolledInput
        ref={null}
        id="some id"
        name="test"
        type="email"
        placeholder="some placeholder"
        defaultValue="test default value"
      />,
    );
    const el = getAllByRole('textbox');

    expect(el).toMatchSnapshot();
  });
});
