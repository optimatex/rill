import * as React from 'react';

const DraftNodeLink = (props) => {
  const { id } = props.contentState.getEntity(props.entityKey).getData();
  return <a href={id}>{props.children}</a>;
};

function findLinks(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();

    return (
      (entityKey &&
        contentState.getEntity(entityKey).getType() === 'NODELINK') ||
      false
    );
  }, callback);
}

export default {
  strategy: findLinks,
  component: DraftNodeLink,
};
