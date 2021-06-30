import { React } from '_employee/view';
import { Post } from '_employee/ui-kit';

import { ICommonMessageProps } from '@types';
import Messages from '../Messages';
import MessageForm from '../MessageForm';

const Chat = (props: ICommonMessageProps) => (
  <Post title="Chat room">
    <Messages messages={props.messages} />

    <MessageForm onAddMessage={props.onAddMessage} />
  </Post>
);

export default Chat;
