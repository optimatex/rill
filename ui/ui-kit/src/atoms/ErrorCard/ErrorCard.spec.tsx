import { React } from '_employee/view';
import { render } from 'test';
import { ErrorCard } from '.';

const text = 'some text warning';

const defaultProps = {
  text,
};

const draw = (props = {}) => render(<ErrorCard {...defaultProps} {...props} />);

describe('ErrorCard', () => {
  it('should render without errors', () => {
    const { getByText } = draw();
    const el = getByText(text);

    expect(el).toMatchSnapshot();
  });
});
