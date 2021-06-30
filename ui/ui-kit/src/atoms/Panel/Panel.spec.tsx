import { React } from '_employee/view';
import { render } from 'test';
import { Panel } from '.';

describe('Panel', () => {
  it('should render without errors', () => {
    const { container } = render(<Panel>Some content </Panel>);

    expect(container).toMatchSnapshot();
  });
});
