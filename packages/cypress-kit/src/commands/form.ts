import { compose, curry } from '_employee/utils';
import { formSubmitById } from '_employee/cypress-selectors';

import { InputNode } from '@types';
import { get, click } from './general';

export const typeToInput = curry((text: string, el: InputNode) =>
  el.type(text),
);

export const submitInput = (el: InputNode) => el.type('{enter}');

// @ts-ignore
export const submitForm = compose(click, get, formSubmitById);

export const clearInput = (el: InputNode) => el.clear();
