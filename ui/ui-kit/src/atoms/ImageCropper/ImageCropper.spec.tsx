import { render, mockImageURL_1 } from 'test';
import { React } from '_employee/view';
import { Image } from '../Image';
import { ImageCropper } from '.';

describe('ImageCropper', () => {
  it('should render without errors', () => {
    const { container } = render(
      <ImageCropper>
        <Image src={mockImageURL_1} />
      </ImageCropper>,
    );
    const el = container.querySelector('div');

    expect(el).toMatchSnapshot();
  });
});
