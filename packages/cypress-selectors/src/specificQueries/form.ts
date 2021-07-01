import { compose } from '_employee/utils';

import { include } from '../transformers';
import {
  byTestId,
  formById,
  submitButton,
  attributeWithTag,
  contentEditable,
} from '../baseQueries';

export const richEditor = attributeWithTag('', contentEditable, 'true');

export const richEditorByTestId = compose<string, string>(
  include(richEditor),
  byTestId,
);

export const formField = (name: string) => byTestId(`field-${name}`);

export const formSubmitById = compose<string, string, string>(
  include(submitButton),
  formById,
);

export const richTextFormSubmitById = compose<string, string, string>(
  include(submitButton),
  byTestId,
);
