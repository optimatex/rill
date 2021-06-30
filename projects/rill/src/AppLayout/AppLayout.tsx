import { React, ThemeProvider, ThemePrism, useState } from '_employee/view';
import { Router, Switch } from '_employee/react-router-dom';
import { Provider } from '_employee/react-redux';
import { store } from '_employee/rill-store';
import {
  mainThemeFactory,
  sidebarThemeFactory,
  headerThemeFactory,
} from '_employee/rill-theme';
import { GlobalStyles } from '_employee/rill-app-style';
import { TrivialAppLayout, ContentColumn } from '_employee/ui-kit';

import { layoutTopOffset } from '@constants';
import { Sidebar, AppHeader } from '../components';
import Routes from '../Routes';

const AppLayout = () => {
  const [themeMode, setThemeMode] = useState('light');

  const isDarkMode = themeMode === 'dark';

  const toggleDarkMode = () => {
    setThemeMode(isDarkMode ? 'light' : 'dark');
  };

  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <ThemeProvider mode={themeMode} themeFactory={mainThemeFactory}>
            <ThemePrism themeFactory={headerThemeFactory}>
              <AppHeader
                isDarkMode={isDarkMode}
                onChangeMode={toggleDarkMode}
              />
            </ThemePrism>

            <TrivialAppLayout topOffset={layoutTopOffset}>
              <ThemePrism themeFactory={sidebarThemeFactory}>
                <Sidebar />
              </ThemePrism>

              <ContentColumn>
                <Routes />
              </ContentColumn>
            </TrivialAppLayout>

            <GlobalStyles />
          </ThemeProvider>
        </Provider>
      </Switch>
    </Router>
  );
};
export default AppLayout;
