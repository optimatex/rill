import { FC, styled } from '_employee/view';
import { formContainerCss } from '_employee/style-kit';

import { IFormProps } from '@types';

export const FormContainer = styled.form`
  ${formContainerCss}
` as FC<IFormProps>;
