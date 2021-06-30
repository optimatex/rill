import { React } from '_employee/view';
import { render } from 'test';
import { UserListItem } from '.';

describe('UserList', () => {
  it('should render without errors', () => {
    const { container } = render(<UserList />);

    expect(container).toMatchSnapshot();
  });
});
