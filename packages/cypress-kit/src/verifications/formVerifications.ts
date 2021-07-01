import { compose } from '_employee/utils';
import { inputByName, richEditorByTestId } from '_employee/cypress-selectors';

import { Node } from '@types';
import {
  get,
  clearInput,
  typeToInput,
  submitForm,
  submitRichTextForm,
} from '../commands';
import {
  assertValue,
  assertRichEditorValue,
  assertRichTextEmptyValue,
} from '../assertions';

export const verifyInput = (value: string) =>
  compose(assertValue(value), typeToInput(value), clearInput, get, inputByName);

export const verifyRichEditorInput = (value: string) =>
  compose<string, string, Node, Node, Node, void>(
    assertRichEditorValue(value),
    typeToInput(value),
    clearInput,
    get,
    richEditorByTestId,
  );

export const verifyRichEditorInputIsEmpty = compose<string, string, Node, void>(
  assertRichTextEmptyValue,
  get,
  richEditorByTestId,
);

// Fields

// Form

export const verifyForm = submitForm;

export const verifyRichEditorForm = submitRichTextForm;
