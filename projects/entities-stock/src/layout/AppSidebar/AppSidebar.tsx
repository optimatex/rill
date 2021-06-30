import { React } from '_employee/view';
import { SidebarFlatColumn, Card, NavMenu } from '_employee/ui-kit';

import { menuScheme } from '@scheme';

const AppSidebar = ({ setKey }) => {
  const getMenuItemProps = () => ({
    isActive: false,
    handler: (key) => {
      setKey(key);
    },
  });

  return (
    <SidebarFlatColumn>
      <Card>
        <NavMenu scheme={menuScheme} getMenuItemProps={getMenuItemProps} />
      </Card>
    </SidebarFlatColumn>
  );
};

export default AppSidebar;
