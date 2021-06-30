import { React } from '_employee/view';
import { render, mockNavMenuScheme_1, mockGetMenuItemProps } from 'test';
import { navMenuId } from 'utils';
import { NavMenu } from '.';

describe('NavMenu', () => {
  const props = {
    scheme: mockNavMenuScheme_1,
    getMenuItemProps: mockGetMenuItemProps,
    testId: navMenuId,
  };

  it('should render without errors', () => {
    const { getAllByRole } = render(
      <NavMenu {...props}>Some content </NavMenu>,
    );
    const el = getAllByRole('link');

    expect(el).toMatchSnapshot();
  });
});
