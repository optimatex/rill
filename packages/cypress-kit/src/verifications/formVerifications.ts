import { compose, pipe } from '_employee/utils';
import { inputByName } from '_employee/cypress-selectors';

import { get, clearInput, typeToInput, submitForm } from '../commands';
import { assertValue } from '../assertions';

import { InputNode } from '@types';

export const verifyInput = (value: string) =>
  compose(assertValue(value), typeToInput(value), clearInput, get, inputByName);

// Fields

// Form

export const verifyForm = submitForm;
