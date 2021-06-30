export default {
  htmlToBlock: (nodeName, node) => {
    if (nodeName === 'blockquote') {
      return {
        type: 'blockquote',
        data: {},
      };
    }
    if (nodeName === 'figure') {
      const alignment = node.className.indexOf('left') === -1 ? '' : 'left';
      return {
        type: 'atomic',
        data: { alignment },
      };
    }
    return null;
  },
  htmlToStyle: (nodeName, node, currentStyle) => currentStyle,
  htmlToEntity: (nodeName, node, createEntity) => {
    if (nodeName === 'a' && node.getAttribute('data-type') === 'post') {
      return createEntity('NODELINK', 'MUTABLE', {
        id: node.getAttribute('href'),
      });
    }
    if (nodeName === 'a') {
      return createEntity('LINK', 'MUTABLE', {
        url: node.getAttribute('href'),
        look: node.getAttribute('data-look'),
        icon: node.getAttribute('data-i'),
      });
    }
    if (nodeName === 'img' && node.getAttribute('data-photos')) {
      const str = node.getAttribute('data-photos');
      const array = JSON.parse(str);
      return createEntity('photos', 'IMMUTABLE', {
        array,
        layout: node.getAttribute('data-l'),
      });
    }
    if (nodeName === 'img' && node.getAttribute('data-youtubes')) {
      const str = node.getAttribute('data-youtubes');
      const array = JSON.parse(str);
      return createEntity('youtubes', 'IMMUTABLE', {
        array,
        layout: node.getAttribute('data-l'),
      });
    }
    // Temporally disabled
    //
    // else if (nodeName === 'metadata' && node.getAttribute('data-quiz-array')) {
    //   const array = [];
    //   node.getAttribute('data-quiz-array').split(',').forEach((TemplateId) => {
    //     const model = obj.quiz_store.collection.find(m => m.TemplateId === Number(TemplateId));
    //     if (model) array.push(model);
    //   });
    //   return createEntity(
    //            'quiz_array',
    //            'IMMUTABLE',
    //            { array },
    //         );
    // }
    return null;
  },
  textToEntity: (text, createEntity) => {
    const result = [];
    text.replace(/@(\w+)/g, (match, name, offset) => {
      const entityKey = createEntity('AT-MENTION', 'IMMUTABLE', { name });
      result.push({
        entity: entityKey,
        offset,
        length: match.length,
        result: match,
      });
    });
    return result;
  },
};
