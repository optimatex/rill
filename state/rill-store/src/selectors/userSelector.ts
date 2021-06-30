import { prop, compose } from '_employee/utils';

import { Slices, UsersProps } from '@types';

export const usersSelector = compose(prop(UsersProps.list), prop(Slices.users));
