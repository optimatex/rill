import { createSlice } from '_employee/redux-toolkit';

import { Slices, MessagesProps } from '@types';
import { messagesInitialState } from 'initialState';
import { getMessages, addMessage } from '../actions';

const messagesSlice = createSlice({
  name: Slices.messages,
  initialState: messagesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state[MessagesProps.list] = action.payload;
    });

    builder.addCase(addMessage.fulfilled, (state, action) => {
      state[MessagesProps.list].push(action.payload);
    });
  },
});

export default messagesSlice.reducer;
