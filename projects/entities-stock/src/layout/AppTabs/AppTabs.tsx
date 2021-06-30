import { React, ThemePrism, ErrorBoundary, useState } from '_employee/view';
import { sidebarThemeFactory } from '_employee/rill-theme';

import { Keys } from '@scheme';
import { renderErrorCard } from '../errorBoundary';
import AppSidebar from '../AppSidebar';
import AppContent from '../AppContent';

function App() {
  const [currentKey, setKey] = useState(Keys.messages);

  return (
    <ErrorBoundary scope="app-tabs" renderFallback={renderErrorCard}>
      <ThemePrism themeFactory={sidebarThemeFactory}>
        <AppSidebar setKey={setKey} />
      </ThemePrism>

      <AppContent currentKey={currentKey} />
    </ErrorBoundary>
  );
}

export default App;
