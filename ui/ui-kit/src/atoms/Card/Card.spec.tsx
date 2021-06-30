import { React } from '_employee/view';
import { render } from 'test';
import { Card } from '.';

const draw = () =>
  render(
    <Card>
      <button>button text</button>
    </Card>,
  );

describe('Card', () => {
  it('should render card title', () => {
    const { getByRole } = draw();
    const el = getByRole('button');

    expect(el).toMatchSnapshot();
  });
});
