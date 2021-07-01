import { curry } from '_employee/utils';

export const include = curry(
  (queryToAdd: string, acceptor: string) => `${acceptor} ${queryToAdd}`,
);
