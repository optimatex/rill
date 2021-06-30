function findLinks(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    if (
      entityKey != null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    )
      return true;

    return false;
  }, callback);
}

export default {
  strategy: findLinks,
  component: null,
};
