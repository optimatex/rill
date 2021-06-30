import { React } from '_employee/view';
import { TrivialHeader, Toggle } from '_employee/ui-kit';

import { headerHeight } from '@constants';
import Logo from '../Logo';

const AppHeader = (props) => (
  <TrivialHeader height={headerHeight}>
    <Logo />

    <Toggle isActive={props.isDarkMode} onPress={props.onChangeMode} />
  </TrivialHeader>
);

export default AppHeader;
