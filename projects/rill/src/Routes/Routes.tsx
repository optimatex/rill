import { React } from '_employee/view';
import { Route } from '_employee/react-router-dom';

import { Chat, Home } from '../pages';

const Routes = () => (
  <>
    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/:userId">
      <Chat />
    </Route>
  </>
);

export default Routes;
