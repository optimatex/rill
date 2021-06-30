import { navToChat } from '../support/app.commands';
import { verifyInput, verifyForm } from '../employee';
import { testId } from '../../src/@constants';

context('Chat', () => {
  beforeEach(() => {
    navToChat();
  });

  it('Verify sidebar', () => {
    verifyInput('some value')('input_1');
    verifyForm(testId.messageForm);
  });
});
