import { useContext } from '_employee/react';
import { ThemeContext } from '_employee/styled-components';

export const useTheme = () => useContext(ThemeContext);

export const useThemeMode = () => useTheme().mode;
