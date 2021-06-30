import { React, useEffect } from '_employee/view';
import { NavLink } from '_employee/react-router-dom';
import {
  SidebarFlatColumn,
  Card,
  Image,
  ImageCropper,
  Row,
  Name,
  ListContainer,
} from '_employee/ui-kit';
import { useSelector, useDispatch } from '_employee/react-redux';
import { usersSelector, getUsers } from '_employee/rill-store';

import { testId } from '@constants';

const User = ({ displayName, id, avatarUrl }) => (
  <NavLink to={`/${id}`} style={{ textDecoration: 'none' }}>
    <Row type="pipe">
      <ImageCropper>
        <Image src={avatarUrl} />
      </ImageCropper>

      <Name>{displayName}</Name>
    </Row>
  </NavLink>
);

const Sidebar = () => {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  });

  return (
    <SidebarFlatColumn>
      <Card>
        <ListContainer data-testid={testId.menu}>
          {users.map((item) => (
            <User
              id={item.id}
              displayName={item.displayName}
              avatarUrl={item.avatarUrl}
              key={item.id}
            />
          ))}
        </ListContainer>
      </Card>
    </SidebarFlatColumn>
  );
};

export default Sidebar;
