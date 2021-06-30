import { React } from '_employee/view';
import { Row, Card } from '_employee/ui-kit';
import { Messages } from '_employee/ui-entities';

import { mockMessages_1 } from '../../mockData';

const MessagesPage = () => (
  <Card>
    <Messages messages={mockMessages_1} />
  </Card>
);

export default MessagesPage;
