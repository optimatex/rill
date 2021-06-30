import { React, ThemeProvider } from '@rill/view';
import { renderWithWrap } from '@rill/view/test';
import { mockThemeFactory } from '@rill/style-kit/test';

const MockThemeProvider = (props) => (
  // @ts-ignore
  <ThemeProvider mode="dark" themeFactory={mockThemeFactory}>
    {props.children}
  </ThemeProvider>
);

export const render = renderWithWrap(MockThemeProvider);
