import { React } from '_employee/view';
import { render, mockString, mockCombinedRenderProps } from 'test';

import { htmlParser } from '.';

describe('Text Editor Container', () => {
  it('should render without errors', () => {
    const { getByRole } = render(
      <article>{htmlParser(mockString, mockCombinedRenderProps)}</article>,
    );
    const el = getByRole('article');

    expect(el).toMatchSnapshot();
  });

  it('should pass proper props to components', () => {
    const mockRenderParagraph = jest.fn();
    const mockRenderImage = jest.fn();
    const mockRenderYoutubes = jest.fn();
    const renders = {
      renderParagraph: mockRenderParagraph,
      renderImages: mockRenderImage,
      renderYoutubes: mockRenderYoutubes,
    };
    render(<article>{htmlParser(mockString, renders)}</article>);

    expect(mockRenderParagraph).toHaveBeenCalled();
    expect(mockRenderParagraph.mock.calls[0]).toMatchSnapshot();

    expect(mockRenderImage).toHaveBeenCalled();
    expect(mockRenderImage.mock.calls[0]).toEqual([
      [
        {
          Height: 0,
          Id: 38318,
          ImageId: '96f90d02-6a3d-4535-961d-a2d4e2571e6b',
          Width: 0,
        },
      ],
      'grid',
    ]);

    expect(mockRenderYoutubes).toHaveBeenCalled();
    expect(mockRenderYoutubes.mock.calls[0]).toEqual([
      [
        {
          Id: 2073,
          Source: 'https://www.youtube.com/watch?v=VhkfnPVQyaY',
          YouTubeId: 'VhkfnPVQyaY',
        },
      ],
      'grid',
    ]);
  });
});
