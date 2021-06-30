import { render } from 'test';
import { React } from '_employee/view';

import { Image } from '.';

describe('Image', () => {
  it('should render without errors', () => {
    const { getByRole } = render(<Image src="https://img.com/" />);
    const el = getByRole('img');

    expect(el).toMatchSnapshot();
  });
});
