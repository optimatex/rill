import { React } from '../../src/_employee/react';
import { ThemeProvider } from '../../src/_employee/styled-components';

import {
  render as defaultRender,
  act as reactAct,
  waitFor,
} from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { getTheme } from '../mockData';

// import '@testing-library/jest-dom/extend-expect';

const themeContext = getTheme();

export function Wrap(props) {
  return <ThemeProvider theme={themeContext}>{props.children}</ThemeProvider>;
}

const withTheme = {
  wrapper: Wrap,
};

const render = (component) => defaultRender(component, withTheme);

export const renderWithWrap = (Wrapper) => (component) =>
  defaultRender(component, {
    wrapper: Wrapper,
  });

export { screen, render, defaultRender, withTheme, reactAct, waitFor };
