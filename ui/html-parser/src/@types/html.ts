import { RC } from '_employee/view';

// export type ListLayout = 'list';
// export type GridLayout = 'grid';
export enum Layout {
  List = 'list',
  Grid = 'grid',
}

type PhotosModels = any[];

type YoutubesModels = any[];

export enum Attributes {
  Url = 'href',
  Layout = 'data-l',
  Photos = 'data-photos',
  Youtubes = 'data-youtubes',
}

export interface ILinkAttrs {
  href: string;
}

export interface ISharedAttrs {
  [Attributes.Layout]: Layout;
}
export interface IPhotosAttrs extends ISharedAttrs {
  [Attributes.Photos]: string;
}
export interface IYoutubesAttrs extends ISharedAttrs {
  [Attributes.Youtubes]: string;
}

export interface ICommonHtmlNode {
  name: 'a' | 'img';
  attribs: IYoutubesAttrs | IPhotosAttrs | ILinkAttrs;
}

export interface ILinkHtmlNode {
  attribs: IPhotosAttrs;
}

export interface IPhotosHtmlNode {
  attribs: IPhotosAttrs;
}

export interface IYoutubesHtmlNode {
  attribs: IYoutubesAttrs;
}

export interface IRenders {
  renderParagraph: (children: RC, index: number) => RC;
  renderLink?: (href: string, children: RC) => RC;
  renderImages?: (imagesModels: PhotosModels, layout: Layout) => RC;
  renderYoutubes?: (videosModels: YoutubesModels, layout: Layout) => RC;
}
