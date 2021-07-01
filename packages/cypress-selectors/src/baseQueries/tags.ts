import { attributeWithTag, testId, href } from './attributes';

// Constants

const button = 'button';

const link = 'a';

const form = 'form';

const input = 'input';

const span = 'span';

// Common Tags

export const spanById = () => attributeWithTag(span, testId);

export const buttonById = () => attributeWithTag(button, testId);

export const linkByUrl = () => attributeWithTag(link, href);

// Forms

export const submitButton = attributeWithTag(button, 'type', 'submit');

export const formById = attributeWithTag(form, testId);

export const inputByName = attributeWithTag(input, 'name');

export const inputType = attributeWithTag(input, 'type');

export const emailInput = inputType('email');
