import {React} from '_employee/view';
import {render} from 'test';
import Logo from '.';

describe('Logo', () => {
  it('should render without errors', () => {
    const {getByRole} = render(<Logo {...props} />);
    const el = getByRole('');
    
    expect(el).toMatchSnapshot();
  });
});
