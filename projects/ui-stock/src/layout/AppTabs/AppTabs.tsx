import { React, ThemePrism, useState } from '_employee/view';
import { sidebarThemeFactory } from '_employee/rill-theme';

import AppSidebar from '../AppSidebar';
import AppContent from '../AppContent';

function App() {
  const [currentKey, setKey] = useState('buttons');

  return (
    <>
      <ThemePrism themeFactory={sidebarThemeFactory}>
        <AppSidebar setKey={setKey} />
      </ThemePrism>

      <AppContent currentKey={currentKey} />
    </>
  );
}

export default App;
