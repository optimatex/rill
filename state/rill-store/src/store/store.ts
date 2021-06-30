import { configureStore } from '_employee/redux-toolkit';

import { Slices } from '@types';
import { message, user } from '../slices';

export default configureStore({
  reducer: {
    [Slices.messages]: message,
    [Slices.users]: user,
  },
});
