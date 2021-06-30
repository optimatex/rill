import { React } from '_employee/view';
import { Button, ButtonActive, Row, Card } from '_employee/ui-kit';
import { makeClickHandler } from '../../utils';

const Interactive = () => (
  <Card>
    <Row>
      <Button onClick={makeClickHandler('button')} testID="button">
        Simple button
      </Button>

      <ButtonActive onClick={makeClickHandler('active button')}>
        Main button
      </ButtonActive>
    </Row>
  </Card>
);

export default Interactive;
