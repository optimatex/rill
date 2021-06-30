import { React } from '_employee/view';
import { render, iconModel_1, iconModel_2 } from 'test';
import { Icon } from '.';

describe('Icon', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(
      <Icon {...iconModel_1} data-testid="test-icon" />,
    );
    const el = getByTestId('test-icon');

    expect(el).toMatchSnapshot();
  });

  it('should has style rules based on props', () => {
    const { getByTestId } = render(
      <Icon {...iconModel_2} data-testid="test-icon" />,
    );
    const el = getByTestId('test-icon');

    expect(el).toHaveStyleRule('font-size', '15px', {
      modifier: '::before',
    });
  });

  it('should has classname based on props', () => {
    const { getByTestId } = render(
      <Icon {...iconModel_2} data-testid="test-icon" />,
    );
    const el = getByTestId('test-icon');

    // expect(el).toHaveClass('icon-play', 'ds');
  });
});
