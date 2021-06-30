import { React } from '_employee/view';
import { Card, ListContainer } from '_employee/ui-kit';
import { IMessage } from '_employee/rill-meta';

import Message from '../Message';

interface IMessagesProps {
  messages: IMessage[];
}

interface IMessagesListProps {
  messages: IMessage[];
}

export const EmptyContent = () => <Card>No one message yet!</Card>;

export const renderMessageFromModel = (item: IMessage) => (
  <Message {...item} key={item.id} />
);

export const MessagesList = ({ messages }: IMessagesListProps) => (
  <ListContainer>{messages.map(renderMessageFromModel)}</ListContainer>
);

const Messages = ({ messages }: IMessagesProps) => (
  <>
    {messages && messages.length ? (
      <MessagesList messages={messages} />
    ) : (
      <EmptyContent />
    )}
  </>
);

export default Messages;
