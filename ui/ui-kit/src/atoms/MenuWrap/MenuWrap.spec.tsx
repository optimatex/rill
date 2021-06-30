import { React } from '_employee/view';
import { render } from 'test';
import { MenuWrap } from '.';

describe('MenuWrap', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(
      <MenuWrap data-testid="test-menu">Some content </MenuWrap>,
    );
    const el = getByTestId('test-menu');

    expect(el).toMatchSnapshot();
  });
});
