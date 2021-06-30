const commonInput = {
  type: 'text',
  placeholder: '',
};

export const controlledInputDefaultProps = {
  ...commonInput,
  value: '',
};

export const uncontrolledInputDefaultProps = {
  ...commonInput,
  defaultValue: '',
};

export const fieldInputDefaultProps = {
  ...uncontrolledInputDefaultProps,
  value: '',
};
