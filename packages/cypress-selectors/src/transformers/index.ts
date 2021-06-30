import { curry } from '_employee/utils';

export const append = curry(
  (queryToAdd: string, acceptor: string) => `${acceptor} ${queryToAdd}`,
);
