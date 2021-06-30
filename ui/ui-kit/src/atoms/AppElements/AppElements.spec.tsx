import { React } from '_employee/view';
import { render, text_1, text_2, text_3 } from 'test';
import {
  AppLayout,
  TrivialAppLayout,
  Screen,
  SidebarColumn,
  ContentColumn,
} from '.';

describe('AppElements', () => {
  it('Screen', () => {
    const { getByText } = render(<Screen>{text_1}</Screen>);
    const el = getByText(text_1);

    expect(el).toMatchSnapshot();
  });

  it('SidebarColumn', () => {
    const { getByText } = render(<SidebarColumn>{text_2}</SidebarColumn>);
    const el = getByText(text_2);

    expect(el).toMatchSnapshot();
  });

  it('ContentColumn', () => {
    const { getByText } = render(<ContentColumn>{text_3}</ContentColumn>);
    const el = getByText(text_3);

    expect(el).toMatchSnapshot();
  });

  it('AppLayout', () => {
    const { getByText } = render(<AppLayout>{text_1}</AppLayout>);
    const el = getByText(text_1);

    expect(el).toMatchSnapshot();
  });

  it('TrivialAppLayout', () => {
    const { getByText } = render(
      <TrivialAppLayout topOffset={50}>{text_2}</TrivialAppLayout>,
    );
    const el = getByText(text_2);

    expect(el).toMatchSnapshot();
  });
});
