import { curry } from '_employee/utils';

import { InputNode } from '@types';

export const assertValue = curry((value: string, el: InputNode) =>
  el.should('have.value', value),
);
