export type Possition = 'top' | 'bottom' | 'left' | 'right';

export interface IPossiton {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface ILightIndicator {
  color: string;
  title?: string;
}

export interface IIcon {
  name: string;
  size: number;
  color: string;
  possition?: IPossiton;
}

export interface IImage {
  src: string;
  alt: string;
}

export interface IActivateable {
  isActive: boolean;
  onPress: () => void;
}

export type LayoutTypes = 'list' | 'grid';
