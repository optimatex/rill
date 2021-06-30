import * as React from 'react';

const regex = /↵/g;

function find_regex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function find_lineBreak(contentBlock, callback) {
  find_regex(regex, contentBlock, callback);
}

const LineBreak = (props) => (
  <span className="hashTag" {...props}>
    {props.children}
  </span>
);

export default {
  strategy: find_lineBreak,
  component: LineBreak,
};
