import { React } from '_employee/view';
import { Button, ButtonActive, Row, Post } from '_employee/ui-kit';
import { MessageForm } from '_employee/ui-entities';
import { makeClickHandler } from '../../utils';

const MessageFormPage = () => (
  <Post title="Message form (rich text editor based on draft-js framework">
    <MessageForm onAddMessage={() => {}} />
  </Post>
);

export default MessageFormPage;
