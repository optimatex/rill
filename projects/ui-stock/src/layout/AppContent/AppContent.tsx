import { React } from '_employee/view';
import { ContentColumn, Card } from '_employee/ui-kit';

import { Buttons } from 'pages';

const contentMap = {
  buttons: Buttons
};

const AppContent = ({ currentKey }) => {
  const Component = contentMap[currentKey];

  return (
    <ContentColumn>
      <Component />
    </ContentColumn>
  );
};

export default AppContent;
