import { React } from '_employee/view';
import { render } from 'test';
import { TrivialHeader } from '.';

const draw = () =>
  render(<TrivialHeader height={50}>some header content</TrivialHeader>);

describe('Header', () => {
  it('should render without errors', () => {
    const { getByRole } = draw();
    const el = getByRole('banner');

    expect(el).toMatchSnapshot();
  });
});
