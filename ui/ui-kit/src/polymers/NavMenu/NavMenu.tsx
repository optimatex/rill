import { React, MouseEvent } from '_employee/view';

import { INavRawScheme, INavLinkContainer, INavMenuProps } from '@types';
import { MenuWrap, Icon, MenuItemLink } from 'atoms';

// color: ${(props: INavLink) => props.isActive}

export const NavItem = ({ model, getMenuItemProps }: INavLinkContainer) => {
  const { key, icon, title } = model;

  const { isActive, handler } = getMenuItemProps(key);

  const cb = (e: MouseEvent) => {
    e.preventDefault();
    handler(key);
  };

  return (
    <MenuItemLink href={key} isActive={isActive} onClick={cb}>
      {icon ? <Icon {...icon} /> : null}

      {title}
    </MenuItemLink>
  );
};

export const NavMenu = (props: INavMenuProps) => (
  <MenuWrap data-testid={props['data-testid']}>
    {props.scheme.map((item: INavRawScheme) => (
      <NavItem
        model={item}
        getMenuItemProps={props.getMenuItemProps}
        key={item.key}
      />
    ))}
  </MenuWrap>
);
