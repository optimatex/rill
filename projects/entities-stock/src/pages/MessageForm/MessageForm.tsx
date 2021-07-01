import { React } from '_employee/view';
import { Button, ButtonActive, Row, Card } from '_employee/ui-kit';
import { MessageForm } from '_employee/ui-entities';
import { makeClickHandler } from '../../utils';

const Interactive = () => (
  <Card>
    <MessageForm onAddMessage={() => {}} />
  </Card>
);

export default Interactive;
