import { IUserBrief } from './user.types';

export interface IMessage {
  id: string;
  text: string;
  timestamp: number;
  author: IUserBrief;
}
