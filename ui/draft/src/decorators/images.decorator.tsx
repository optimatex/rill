import * as React from 'react';

const Empty = props => {
  const { src } = props.contentState.getEntity(props.entityKey).getData();
  // if (src.includes('')) {
  //   return <img src="src" alt="" />;
  // }
  return null;
};

function find_links(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      contentState.getEntity(entityKey).getType() === 'IMAGE'
    );
  }, callback);
}

export default {
  strategy: find_links,
  component: Empty,
};
