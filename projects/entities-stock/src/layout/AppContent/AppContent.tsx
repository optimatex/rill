import { React } from '_employee/view';
import { ContentColumn } from '_employee/ui-kit';

import { Keys } from '@scheme';
import { Messages, MessageForm } from 'pages';

const contentMap = {
  [Keys.messageForm]: MessageForm,
  [Keys.messages]: Messages,
};

const AppContent = ({ currentKey }) => {
  const Component = contentMap[currentKey];

  return Component ? (
    <ContentColumn>{Component ? <Component /> : null}</ContentColumn>
  ) : null;
};

export default AppContent;
