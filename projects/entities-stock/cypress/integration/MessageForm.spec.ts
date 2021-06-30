import { navToMessageForm } from '../support/app.commands';
import { verifyInput, verifyForm } from '../employee';
import { formId } from '../../src/@constants';

context('MessageForm', () => {
  beforeEach(() => {
    navToMessageForm();
  });

  it('Verify inputs', () => {
    verifyInput('some value')('input_1');
    // @ts-ignore
    verifyForm(formId.messageForm);
  });
});
