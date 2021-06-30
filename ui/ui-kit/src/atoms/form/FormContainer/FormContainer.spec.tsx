import { React } from '_employee/view';
import { render } from 'test';
import { FormContainer } from '.';

describe('FormContainer', () => {
  it('should render without errors', () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(
      <FormContainer data-testid="fire-form" onSubmit={onSubmit}>
        Some content{' '}
      </FormContainer>,
    );
    const el = getByTestId('fire-form');

    expect(el).toMatchSnapshot();
  });
});
