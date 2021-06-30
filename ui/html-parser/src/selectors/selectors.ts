import {
  Attributes,
  IPhotosHtmlNode,
  IYoutubesHtmlNode,
  ILinkHtmlNode,
} from '@types';

export const always = () => true;

export const getHref = (node: ILinkHtmlNode) =>
  (node.attribs && node.attribs[Attributes.Url]) || '';

export const getLayout = (node: IPhotosHtmlNode | IYoutubesHtmlNode) =>
  node.attribs && node.attribs[Attributes.Layout];

export const getPhotos = (node: IPhotosHtmlNode) =>
  node.attribs && node.attribs[Attributes.Photos];

export const getYoutubes = (node: IYoutubesHtmlNode) =>
  node.attribs && node.attribs[Attributes.Youtubes];
