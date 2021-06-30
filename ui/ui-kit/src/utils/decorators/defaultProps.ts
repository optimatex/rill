import { FC } from '_employee/view';

import { TestIdSetter } from '@types';

export const withDefault = (props = {}, component: FC) => {
  component.defaultProps = props;
};

export const withDefaultId = (idSetter: TestIdSetter, component: FC) => {
  component.defaultProps = idSetter({});
};
