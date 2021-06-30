import { React } from '_employee/view';

import { IFieldProps } from '@types';
import { Row, InputHint, FormLabelText, FormLabelWrap } from 'atoms';

export const FormField = ({
  layout,
  name,
  label,
  error,
  children,
}: IFieldProps) => (
  <Row>
    <FormLabelWrap layout={layout} data-testid={`field-${name}`}>
      {label ? <FormLabelText htmlFor={name}>{label}</FormLabelText> : null}

      {error ? <InputHint>{error}</InputHint> : null}

      {children}
    </FormLabelWrap>
  </Row>
);
