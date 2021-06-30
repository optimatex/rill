import { React, useEffect, useCallback } from '_employee/view';
import { useParams } from '_employee/react-router-dom';
import {} from '_employee/ui-kit';
import { Chat } from '_employee/ui-entities';
import { useSelector, useDispatch } from '_employee/react-redux';
import {
  messagesSelector,
  getMessages,
  addMessage,
} from '_employee/rill-store';

const ChatPage = () => {
  const messages = useSelector(messagesSelector);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getMessages(userId));
  }, [userId]);

  const onAddMessage = useCallback((html: string) => {
    dispatch(addMessage(html));
  }, []);

  return (
    <>
      <Chat messages={messages} onAddMessage={onAddMessage} />
    </>
  );
};

export default ChatPage;
