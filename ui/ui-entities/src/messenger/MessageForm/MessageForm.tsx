import { React } from '_employee/view';
import { TextEditor } from '_employee/draft';
import { Panel } from '_employee/ui-kit';

import { OnAddMessage } from '@types';

interface IProps {
  onAddMessage: OnAddMessage;
}

const MessageForm = ({ onAddMessage }: IProps) => (
  <Panel border="top">
    <TextEditor
      clearOnSubmit
      onSubmit={onAddMessage}
      placeholder="Type your message here..."
    />
  </Panel>
);

export default MessageForm;
