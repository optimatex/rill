import { navToForms } from '../support/app.commands';
import { verifyInput, verifyForm } from '../employee';
import { formId } from '../../src/@constants';

context('Forms', () => {
  beforeEach(() => {
    navToForms();
  });

  it('Verify inputs', () => {
    verifyInput('some value')('input_1');
    verifyForm(formId.form_1);
  });
});
