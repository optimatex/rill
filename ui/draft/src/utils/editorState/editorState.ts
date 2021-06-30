import { EditorState } from '_employee/draft';
import { convertFromHTML, convertToHTML } from '_employee/draft-convert';

import importConfig from 'config/importConfig';
import compositeDecorator from 'decorators/composite_decorator';

export const initContent = (html: string) => {
  if (html) {
    return EditorState.createWithContent(
      // @ts-ignore
      convertFromHTML(importConfig)(html),
      compositeDecorator,
    );
  }
  return EditorState.createEmpty(compositeDecorator);
};
