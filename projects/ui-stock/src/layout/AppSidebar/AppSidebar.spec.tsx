import {React} from '_employee/view';
import {render} from 'test';
import AppSidebar from '.';

describe('AppSidebar', () => {
  it('should render without errors', () => {
    const {getByRole} = render(<AppSidebar {...props} />);
    const el = getByRole('');
    
    expect(el).toMatchSnapshot();
  });
});
