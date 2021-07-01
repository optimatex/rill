import { curry } from '_employee/utils';

import { InputNode } from '@types';

export const assertValue = curry((value: string, el: InputNode) =>
  el.should('have.value', value),
);

export const assertRichEditorValue = curry((value: string, el: InputNode) =>
  el.contains(value),
);

export const assertRichTextEmptyValue = curry(
  (el: InputNode) => el.should('exist'), // TODO: find better assertion
);
