import { prop, compose } from '_employee/utils';

import { Slices, MessagesProps } from '@types';

export const messagesSelector = compose(
  prop(MessagesProps.list),
  prop(Slices.messages),
);
