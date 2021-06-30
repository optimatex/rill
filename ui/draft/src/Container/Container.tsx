import { React, useState } from '_employee/view';
import { Editor, EditorState, convertToRaw } from '_employee/draft';
import { draftToHtml } from '_employee/draftjs-to-html';
import { Button } from '_employee/ui-kit';

import { IEditorProps } from '@types';
import GlobalStyles from './globalStyles';
import { StyledWrap } from './Container.styles';

const Container = (props: IEditorProps) => {
  const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty(),
      // TODO: initContent(props.content),
    ),
    editor = React.useRef(null);

  const focusEditor = () => {
    // TODO: restore after fixing
    // editor.current.focus();
  };

  const handleSubmit = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());

    props.onSubmit(draftToHtml(rawContentState));

    if (props.clearOnSubmit) {
      setEditorState(() => EditorState.createEmpty());
    }
  };

  return (
    <StyledWrap onClick={focusEditor}>
      <Editor
        editorKey={props.editorKey}
        editorState={editorState}
        onChange={setEditorState}
        placeholder={props.placeholder}
        ref={editor}
      />

      <Button onClick={handleSubmit}>Send</Button>

      <GlobalStyles />
    </StyledWrap>
  );
};
export default Container;
