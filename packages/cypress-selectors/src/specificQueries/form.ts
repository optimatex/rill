import { compose } from '_employee/utils';

import { append } from '../transformers';
import { byTestId, formById, submitButton } from '../baseQueries';

export const formField = (name: string) => byTestId(`field-${name}`);

export const formSubmitById = compose(append(submitButton), formById);
