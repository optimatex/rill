import { React } from '_employee/view';
import { render, text_1 } from 'test';
import { DualLogo } from '.';

describe('Logo', () => {
  it('should render without errors', () => {
    const { getByText } = render(<DualLogo text={text_1} />);
    const el = getByText(text_1);

    expect(el).toMatchSnapshot();
  });
});
