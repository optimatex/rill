import { RC } from '_employee/view';

export type RowTypes = 'pipe';

export interface IBinaryLayout {
  layout?: 'flat' | 'columnt';
}

export interface ICommonLayout {
  gap?: number;
  children: RC;
}

export interface IRowLayout extends ICommonLayout {
  type?: RowTypes;
}
