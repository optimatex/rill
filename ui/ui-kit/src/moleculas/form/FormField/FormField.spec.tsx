import { React } from '_employee/view';
import { render } from 'test';
import { UncontrolledInput } from '../UncontrolledInput';
import { FormField } from '.';

describe('FormField', () => {
  it('should render without errors', () => {
    const { getByTestId, getByText, getAllByRole } = render(
      <FormField label="warrior" name="some-name" error="some error">
        <UncontrolledInput ref={null} name="test name" />
      </FormField>,
    );
    // container
    const container = getByTestId('field-some-name');
    expect(container).toMatchSnapshot();
    // error
    const error = getByText('some error');
    expect(error).toMatchSnapshot();
    // input
    const input = getAllByRole('textbox');
    expect(input).toMatchSnapshot();
    // label
    const label = getByText('warrior');
    expect(label).toMatchSnapshot();
  });
});
