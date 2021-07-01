import { navToChat } from '../support/app.commands';
import {
  verifyRichEditorInput,
  verifyRichEditorInputIsEmpty,
  verifyRichEditorForm,
} from '../employee';
import { testId } from '../../src/@constants';

context('Chat', () => {
  beforeEach(() => {
    navToChat();
  });

  it('Verify sidebar', () => {
    verifyRichEditorInput('some value')('text-editor-wrap');
    verifyRichEditorForm('text-editor-wrap');
    verifyRichEditorInputIsEmpty('text-editor-wrap');
  });
});
