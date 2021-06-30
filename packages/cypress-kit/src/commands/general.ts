import { Node } from '@types';

export const get = (query: string) => cy.get(`${query}`);

// User interactions

export const click = (el: Node) => el.click();
