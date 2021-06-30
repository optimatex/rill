import { attributeWithTag, testId } from './attributes';

// Constants

const button = 'button';

const form = 'form';

const input = 'input';

const span = 'span';

// Common Tags

export const spanById = () => attributeWithTag(span, testId);

export const buttonById = () => attributeWithTag(button, testId);

// Forms

export const submitButton = attributeWithTag(button, 'type', 'submit');

export const formById = attributeWithTag(form, testId);

export const inputByName = attributeWithTag(input, 'name');

export const inputType = attributeWithTag(input, 'type');

export const emailInput = inputType('email');
