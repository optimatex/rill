import { createAsyncThunk } from '_employee/redux';

import { getUsersRequest } from 'requests';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const res = await getUsersRequest();

    return res;
  } catch (error) {
    //   dispatch((error));
  }
});
