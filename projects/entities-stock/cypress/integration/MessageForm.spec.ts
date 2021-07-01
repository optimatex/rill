import { navToMessages } from '../support/app.commands';
import {
  verifyRichEditorInput,
  verifyRichEditorInputIsEmpty,
  verifyRichEditorForm,
} from '../employee';
import { formId } from '../../src/@constants';

context('MessageForm', () => {
  beforeEach(() => {
    navToMessages();
  });

  it('Verify message form', () => {
    verifyRichEditorInput('some value')('text-editor-wrap');
    verifyRichEditorForm('text-editor-wrap');
    verifyRichEditorInputIsEmpty('text-editor-wrap');
  });
});
