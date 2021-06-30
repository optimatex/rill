import { curry } from '_employee/utils';

// Constants

export const testId = 'data-testid';

// Base Selectors

export const attributeWithTag = curry(
  (tag: string, attr: string, value: string) => `${tag}[${attr}="${value}"]`,
);

// By Certain Attribute

export const byTestId = attributeWithTag('', 'data-testid');
