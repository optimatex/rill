import { compose, curry } from '_employee/utils';
import {
  formSubmitById,
  richTextFormSubmitById,
} from '_employee/cypress-selectors';

import { InputNode, ButtonNode } from '@types';
import { get, click } from './general';

export const typeToInput = curry((text: string, el: InputNode) =>
  el.type(text),
);

export const submitInput = (el: InputNode) => el.type('{enter}');

export const submitForm = compose<string, string, ButtonNode, void>(
  click,
  get,
  formSubmitById,
);

export const submitRichTextForm = compose<string, string, ButtonNode, void>(
  click,
  get,
  richTextFormSubmitById,
);

export const clearInput = (el: InputNode) => el.clear();
