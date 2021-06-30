import { createSlice } from '_employee/redux-toolkit';

import { Slices, UsersProps } from '@types';
import { usersInitialState } from 'initialState';
import { getUsers } from '../actions';

const usersSlice = createSlice({
  name: Slices.users,
  initialState: usersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state[UsersProps.list] = action.payload;
    });
  },
});

export default usersSlice.reducer;
