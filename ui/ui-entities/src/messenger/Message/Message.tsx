import { React } from '_employee/view';
import { Row, Image, ImageCropper } from '_employee/ui-kit';
import { IMessage } from '_employee/rill-meta';

import MessageContent from '../MessageContent';

const Message = ({ text, author }: IMessage) => (
  <Row gap={12}>
    <ImageCropper>
      <Image src={author.avatarUrl} />
    </ImageCropper>

    <MessageContent html={text} />
  </Row>
);

export default Message;
