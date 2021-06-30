import { React } from '_employee/view';
import { htmlParser } from '_employee/html-parser';
import { RichContentContainer } from '_employee/ui-kit';

import renders from './contentRenderParams';

interface IProps {
  html: string;
}

const MessageContent = (props: IProps) => (
  <RichContentContainer>{htmlParser(props.html, renders)}</RichContentContainer>
);

export default MessageContent;
