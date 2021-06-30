import { IIcon, IComponentProps } from '@types';

// Side effects

export type CtrlHandler = (e?: React.MouseEvent) => void;

// Factories

export type GetMenuItemProps = (path: string) => IGetMenuItemProps;

// Objects

export interface IMenuRawScheme {
  key: string;
  icon: IIcon;
  title: string;
}

export interface IMenuStateScheme {
  isActive: boolean;
}

export interface INavRawScheme extends IMenuRawScheme {
  path: string;
}

export interface IMenuFullScheme extends IMenuRawScheme, IMenuStateScheme {
  handler: CtrlHandler;
}

export interface INavLinkContainer {
  model: INavRawScheme;
  getMenuItemProps: GetMenuItemProps;
}

export interface IGetMenuItemProps {
  isActive: boolean;
  handler: (path: string) => void;
}

export interface INavMenuProps extends IComponentProps {
  scheme: INavRawScheme[];
  getMenuItemProps: GetMenuItemProps;
}

// Map

export type IconsMap = {
  [key: string]: IIcon;
};

export type TitleMap = {
  [key: string]: string;
};

export type UrlPathMap = {
  [key: string]: string;
};

// Morphisms

export type MorphToCtrlScheme = (s: IMenuRawScheme) => IMenuFullScheme;
