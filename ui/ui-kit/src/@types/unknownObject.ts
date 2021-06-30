export type ObjectKeyValue = string | string[];

export type Output = JSX.Element;

export type ObjectEmptyValue = null | undefined;

export interface ITester {
  test: (value: unknown) => boolean;
  render: (value: unknown) => Output;
}

export interface ITesterRendered {
  test: (value: unknown) => boolean;
  render: (value: unknown) => Output;
}

export type RenderBoolean = (v: boolean) => Output;

export type RenderEmptyValue = (v: ObjectEmptyValue) => Output;

export type RenderString = (v: string) => Output;

export type RenderNumber = (v: number) => Output;

export type RenderArrayWrap = (children: Output[], level?: number) => Output;

export type RenderArrayItem = (children: Output, index: number) => Output;

export type RenderObjectWrap = (value: Output[], level: number) => Output;

export type RenderObjectPair = (
  keyEl: Output,
  valueEl: Output,
  id: string,
) => Output;

export type RenderObjectKey = (key: ObjectKeyValue) => Output;

export interface IConfig {
  renderEmpty: RenderEmptyValue;
  renderBoolean: RenderBoolean;
  renderString: RenderString;
  renderNumber: RenderNumber;
  renderArrayWrap: RenderArrayWrap;
  renderArrayItem: RenderArrayItem;
  renderObjectWrap: RenderObjectWrap;
  renderObjectPair: RenderObjectPair;
  renderObjectKey: RenderObjectKey;
}

export type Config = Partial<IConfig>;

export interface IProps extends Partial<IConfig> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  value: object;
  'data-testid': string;
}
