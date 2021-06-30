import { React } from '_employee/view';
import { render } from 'test';

import Container from '.';

describe('Text Editor Container', () => {
  it('should render without errors', () => {
    const { getByRole } = render(
      <Container editorKey="the one" onSubmit={jest.fn()} />,
    );
    const el = getByRole('textbox');

    expect(el).toBeInTheDocument();
  });
});
