import { IMessage } from '_employee/rill-meta';

export type OnAddMessage = (html: string) => void;

export interface ICommonMessageProps {
  messages: IMessage[];
  onAddMessage: OnAddMessage;
}
