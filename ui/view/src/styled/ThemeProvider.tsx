import { React, useMemo } from '_employee/react';
import { ThemeProvider as DefaultThemeProvider } from '_employee/styled-components';

import { RC } from '@types';
import { useTheme } from './hooks';

interface IThemeProviderProps {
  mode: string;
  themeFactory: (mode: string) => unknown;
  children: RC;
}

const ThemeProvider = ({
  mode,
  themeFactory,
  children,
}: IThemeProviderProps) => {
  const themeValue = useMemo(() => themeFactory(mode), [mode, themeFactory]);

  return (
    <DefaultThemeProvider theme={themeValue}>{children}</DefaultThemeProvider>
  );
};

interface IExtendedThemeProviderProps {
  themeFactory: (mode: string) => unknown;
  children: RC;
}

const ThemePrism = ({
  themeFactory,
  children,
}: IExtendedThemeProviderProps) => {
  const currentTheme = useTheme();
  const themeValue = useMemo(() => themeFactory(currentTheme), [
    currentTheme,
    themeFactory,
  ]);

  return (
    <DefaultThemeProvider theme={themeValue}>{children}</DefaultThemeProvider>
  );
};

export { ThemeProvider, ThemePrism };
