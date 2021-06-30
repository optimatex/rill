import { React } from '_employee/view';
import { MenuItemLink, Image, ImageCropper, Name } from '_employee/ui-kit';

interface IItemProps {
  name: string;
  url: string;
  avatarUrl: string;
}

// interface IListProps {
//   testID: string;
// }

export const UserListItem = ({ name, url, avatarUrl }: IItemProps) => (
  <MenuItemLink>
    <ImageCropper>
      <Image src={avatarUrl} />
    </ImageCropper>

    <Name>{name}</Name>
  </MenuItemLink>
);

// export const UserList = ({ list }: IListProps) => (
//   <Container>

//     <Name>{}</Name>
//   </Container>
// );
