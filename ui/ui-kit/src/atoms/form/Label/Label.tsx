import { FC, styled } from '_employee/view';
import {
  formLabelTextCss,
  formFieldFlatCss,
  formFieldColumnCss,
} from '_employee/style-kit';

import { IBinaryLayout } from '@types';

export const FormLabelText = styled.span`
  ${formLabelTextCss}
`;

export const FormLabelWrap = styled.label`
  ${(props: IBinaryLayout) =>
    props.layout === 'flat' ? formFieldFlatCss : formFieldColumnCss}
` as FC<IBinaryLayout>;
