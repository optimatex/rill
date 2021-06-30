import { React } from '_employee/view';
import { TrivialHeader } from '_employee/ui-kit';

import { headerHeight } from '@constants';
import Logo from '../Logo';

const AppHeader = (props) => (
  <TrivialHeader height={headerHeight}>
    <Logo />
  </TrivialHeader>
);

export default AppHeader;
