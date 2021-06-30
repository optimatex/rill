import { React, RC } from '_employee/view';
import { Parser, ProcessNodeDefinitions } from '_employee/html-to-react';

import {
  Layout,
  IRenders,
  ILinkHtmlNode,
  IYoutubesHtmlNode,
  IPhotosHtmlNode,
} from '@types';

import { always, getHref, getLayout, getPhotos, getYoutubes } from 'selectors';

const getData = (node, strignifiedData: string) => {
  try {
    const data = JSON.parse(strignifiedData);
    const layout = getLayout(node) || Layout.List;
    return [data, layout];
  } catch (error) {
    // Add catch
    // eslint-disable-next-line no-console
    console.error('%c HTML parser error', 'color: #C3D400', error);
  }
};

// Creating instances
const processNodeDefinitions = new ProcessNodeDefinitions(React);
const parser = new Parser();

// mapper between HTML entities and render functions
const processingInstructions = (renders: IRenders) => [
  {
    shouldProcessNode: (node) => node.name === 'p',
    processNode: (_, children: RC, index: number) =>
      renders.renderParagraph(children, index),
  },
  {
    shouldProcessNode: getHref,
    processNode: (node: ILinkHtmlNode, children: RC) =>
      renders.renderLink(getHref(node), children),
  },
  {
    shouldProcessNode: getPhotos,
    processNode: (node: IPhotosHtmlNode) => {
      const imagesString = getPhotos(node);
      const [models, layout] = getData(node, imagesString);
      return models.length > 0 ? renders.renderImages(models, layout) : null;
    },
  },
  {
    shouldProcessNode: getYoutubes,
    processNode: (node: IYoutubesHtmlNode) => {
      const youtubesString = getYoutubes(node);
      const [models, layout] = getData(node, youtubesString);
      return models.length > 0 ? renders.renderYoutubes(models, layout) : null;
    },
  },
  {
    // Anything else
    shouldProcessNode: always,
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

export const htmlParser = (HtmlString: string, renders: IRenders) =>
  parser.parseWithInstructions(
    HtmlString,
    always,
    processingInstructions(renders),
  );
