import { React } from '_employee/view';
import { render } from 'test';
import { InputHint } from '.';

describe('InputHint', () => {
  it('should render without errors', () => {
    const { getByText } = render(<InputHint>Some hint</InputHint>);
    const el = getByText('Some hint');

    expect(el).toMatchSnapshot();
  });
});
