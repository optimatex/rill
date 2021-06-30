import { React } from '_employee/view';
import { render, iconModel_1 } from 'test';
import { Button, Buticon } from '.';

describe('Button', () => {
  it('should render without errors', () => {
    const { getByRole } = render(<Button onClick={jest.fn()}>dssd</Button>);
    const el = getByRole('button');

    expect(el).toMatchSnapshot();
  });
});

describe('Buticon', () => {
  it('should render without errors', () => {
    const handler = jest.fn();

    const { getByRole } = render(
      <Buticon icon={iconModel_1} onClick={handler} />,
    );
    const el = getByRole('button');

    expect(el).toMatchSnapshot();
  });
});
