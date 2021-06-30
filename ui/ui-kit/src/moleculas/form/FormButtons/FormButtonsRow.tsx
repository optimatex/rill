import { React } from '_employee/view';

import { SubmitButton, ResetButton, Row } from 'atoms';

interface IProps {
  submitText: string;
  resetText?: string;
}

export const FormButtonsRow = (props: IProps) => (
  <Row type="pipe">
    <SubmitButton type="submit" text={props.submitText} />

    <ResetButton type="reset" text={props.resetText} />
  </Row>
);
