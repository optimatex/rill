
import * as React from 'react';

const hashTag_regex = /\#[\w]+/g;

function find_regex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function find_hashTag(contentBlock, callback) {
  find_regex(hashTag_regex, contentBlock, callback);
}

const Hash_Tag = props => (
  <span className="hashTag" {...props}>
    {props.children}
  </span>
   );

export default {
  strategy: find_hashTag,
  component: Hash_Tag,
};
