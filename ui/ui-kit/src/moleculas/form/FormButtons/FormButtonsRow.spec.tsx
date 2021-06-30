import { React } from '_employee/view';
import { render } from 'test';
import { FormButtonsRow } from '.';

describe('FormButtonsRow', () => {
  it('should render without errors', () => {
    const { getAllByRole } = render(<FormButtonsRow submitText="submit" />);
    const el = getAllByRole('button');

    expect(el).toMatchSnapshot();
  });
});
