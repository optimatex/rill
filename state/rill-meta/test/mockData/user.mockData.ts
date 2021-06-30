import { IUserBrief } from '../../src/@types';

import {
  mockAvatarUrl_1,
  mockAvatarUrl_2,
  mockAvatarUrl_3,
  mockAvatarUrl_4,
  mockAvatarUrl_5,
  mockName_1,
  mockName_2,
  mockName_3,
  mockName_4,
  mockName_5,
} from './general.mockData';

export const mockUserBrief_1: IUserBrief = {
  id: 'user-id-1',
  displayName: mockName_1,
  avatarUrl: mockAvatarUrl_1,
};

export const mockUserBrief_2: IUserBrief = {
  id: 'user-id-2',
  displayName: mockName_2,
  avatarUrl: mockAvatarUrl_2,
};

export const mockUserBrief_3: IUserBrief = {
  id: 'user-id-3',
  displayName: mockName_3,
  avatarUrl: mockAvatarUrl_3,
};

export const mockUserBrief_4: IUserBrief = {
  id: 'user-id-4',
  displayName: mockName_4,
  avatarUrl: mockAvatarUrl_4,
};

export const mockUserBrief_5: IUserBrief = {
  id: 'user-id-5',
  displayName: mockName_5,
  avatarUrl: mockAvatarUrl_5,
};

export const mockUsersBrief_1 = [
  mockUserBrief_1,
  mockUserBrief_2,
  mockUserBrief_3,
  mockUserBrief_4,
  mockUserBrief_5,
];
