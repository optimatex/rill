import { React } from '_employee/view';
import { render } from 'test';
import { List } from '.';

describe('List', () => {
  const props = {
    data: ['frodo', 'sam', 'golum'],
    renderItem: (i: string) => <div key={i}>{i}</div>,
    testID: 'Uber Eats Delivery',
  };

  it('should render without errors', () => {
    const { getByTestId } = render(<List {...props} />);
    const el = getByTestId('Uber Eats Delivery');

    expect(el).toMatchSnapshot();
  });
});
