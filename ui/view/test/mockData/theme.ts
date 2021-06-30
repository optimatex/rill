import { clone } from '@rill/utils';

const mockTheme = {
  mode: 'dark',
  colored: {
    button: {
      background: 'red',
      color: 'white',
    },
    buttonActive: {
      background: 'blue',
      color: 'white',
    },
    card: {
      background: 'yellow',
    },
    surface: {
      background: 'white',
    },
  },
  shape: {
    layout: {
      columnGap: 18,
      rowGap: 18,
    },
    column: {
      maxWidth: 560,
    },
    frame: {
      sideIndent: 8,
      verticalIndent: 5,
      rowGap: 16,
    },
    font: {
      fontSize: 8,
      fontFamily: 'roboto',
      fontWeight: 'bolder',
    },
  },
};

const mockThemeContext = {
  theme: mockTheme,
};

export const getTheme = () => clone(mockTheme);

export const getThemeContext = () => clone(mockThemeContext);
