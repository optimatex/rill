import { React } from '_employee/view';
import { render, text_1, text_2 } from 'test';
import { FormLabelText, FormLabelWrap } from '.';

describe('FormLabel', () => {
  it('FormLabelText', () => {
    const { getByText } = render(
      <FormLabelText htmlFor="lob">{text_1}</FormLabelText>,
    );
    const el = getByText(text_1);

    expect(el).toBeDefined();
    expect(el).toMatchSnapshot();
  });

  it('FormLabelWrap', () => {
    const { getByText } = render(<FormLabelWrap>{text_2}</FormLabelWrap>);
    const el = getByText(text_2);

    expect(el).toBeDefined();
    expect(el).toMatchSnapshot();
  });
});
