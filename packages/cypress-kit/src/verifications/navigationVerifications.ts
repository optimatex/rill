import { compose, pipe } from '_employee/utils';
import { byTestId } from '_employee/cypress-selectors';

import { get, click } from '../commands';
import { assertValue } from '../assertions';

export const verifyNavigation = compose(click, get, byTestId);
