import { React, ThemeProvider, ThemePrism, useState } from '_employee/view';
import {
  mainThemeFactory,
  headerThemeFactory,
} from '_employee/rill-theme';
import { GlobalStyles } from '_employee/rill-app-style';
import { TrivialAppLayout } from '_employee/ui-kit';

import { layoutTopOffset } from '@constants';
import AppHeader from '../AppHeader';
import AppTabs from '../AppTabs';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const isDarkMode = themeMode === 'dark';

  const toggleDarkMode = () => {
    setThemeMode(isDarkMode ? 'light' : 'dark');
  };

  return (
    <ThemeProvider mode={themeMode} themeFactory={mainThemeFactory}>
      <GlobalStyles />

      <TrivialAppLayout topOffset={layoutTopOffset}>
        <AppTabs />
      </TrivialAppLayout>
    </ThemeProvider>
  );
}

export default App;
