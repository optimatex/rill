import { createAsyncThunk } from '_employee/redux';

import { getMessagesRequest, sendMessagesRequest } from 'requests';

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (userId: string) => {
    try {
      const res = await getMessagesRequest();

      return res;
    } catch (error) {
      //   dispatch((error));
    }
  },
);

export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (html: string) => {
    try {
      const res = await sendMessagesRequest(html);

      return res;
    } catch (error) {
      //   dispatch((error));
    }
  },
);
