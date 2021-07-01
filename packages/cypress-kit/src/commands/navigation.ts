import { linkByUrl } from '_employee/cypress-selectors';
import { get } from './general';

export const navigate = (path) => cy.visit(path);

export const clickOnLinkByUrl = (url: string) => {
  // @ts-ignore
  get(linkByUrl(url)).click();
};
