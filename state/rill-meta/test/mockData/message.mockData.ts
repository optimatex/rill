import { IMessage } from '../../src/@types';

import {
  mockDate_1,
  mockDate_2,
  mockDate_3,
  mockDate_4,
  mockDate_5,
  mockHtmlString_1,
  mockHtmlString_2,
  mockHtmlString_3,
  mockHtmlString_4,
  mockHtmlString_5,
} from './general.mockData';
import {
  mockUserBrief_1,
  mockUserBrief_2,
  mockUserBrief_3,
  mockUserBrief_4,
  mockUserBrief_5,
} from './user.mockData';

export const mockMessage_1: IMessage = {
  id: 'message-id-1',
  text: mockHtmlString_1,
  timestamp: mockDate_1,
  author: mockUserBrief_1,
};

export const mockMessage_2: IMessage = {
  id: 'message-id-2',
  text: mockHtmlString_2,
  timestamp: mockDate_2,
  author: mockUserBrief_2,
};

export const mockMessage_3: IMessage = {
  id: 'message-id-3',
  text: mockHtmlString_3,
  timestamp: mockDate_3,
  author: mockUserBrief_3,
};

export const mockMessage_4: IMessage = {
  id: 'message-id-4',
  text: mockHtmlString_4,
  timestamp: mockDate_4,
  author: mockUserBrief_4,
};

export const mockMessage_5: IMessage = {
  id: 'message-id-5',
  text: mockHtmlString_5,
  timestamp: mockDate_5,
  author: mockUserBrief_5,
};

export const mockMessages_1 = [
  mockMessage_1,
  mockMessage_2,
  mockMessage_3,
  mockMessage_4,
  mockMessage_5,
];
