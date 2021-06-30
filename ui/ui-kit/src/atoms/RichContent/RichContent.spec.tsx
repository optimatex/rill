import { React } from '_employee/view';
import { render } from 'test';
import { RichContentContainer } from '.';

describe('RichContent', () => {
  it('should render without errors', () => {
    const { container } = render(
      <RichContentContainer>Some content </RichContentContainer>,
    );

    expect(container).toMatchSnapshot();
  });
});
