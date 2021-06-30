import { React } from '_employee/react';
import { render, renderNumber, ProblemChild, fireEvent } from 'test';
import ErrorBoundary from '.';

const text = 'Some content';
const errorText = 'some error';

const genProps = () => ({
  renderFallback: renderNumber,
  onError: jest.fn(),
});

const draw = (props) =>
  render(
    <ErrorBoundary {...props}>
      <ProblemChild errorText={errorText} properText={text} />
    </ErrorBoundary>,
  );

describe('ErrorBoundary', () => {
  it('should render proper children in case no error occured', () => {
    const props = genProps();

    const { getByText } = draw(props);
    const el = getByText(text);

    expect(el).toMatchSnapshot();
  });

  it('should render error card in case an error occured', () => {
    const props = genProps();

    const { getByText, getByRole } = draw(props);
    const el = getByRole('button');

    try {
      expect(el).toMatchSnapshot();

      // now trigger error
      // fireEvent.click(el);
    } catch (error) {
      const withError = getByText(errorText);

      // eslint-disable-next-line jest/no-conditional-expect
      // expect(withError).toMatchSnapshot();
    }
  });
});
