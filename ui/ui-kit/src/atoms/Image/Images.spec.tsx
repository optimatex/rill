import { render, mockImages } from 'test';
import { React } from '_employee/view';

import { ImagesLayout } from '.';

describe('ImagesLayout', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<ImagesLayout images={mockImages} />);
    const el = getByTestId('images-layout');

    expect(el).toMatchSnapshot();
  });
});
