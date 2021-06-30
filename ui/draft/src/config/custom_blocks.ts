import Atomic from 'draft/components/atomic/atomic';

export const customBlockClasses = (block) => {
  switch (block.getType()) {
    case 'unstyled':
      return 'draft__block';
    case 'blockquote':
      return 'draft__quote';
    case 'code-block':
      return 'draft__code';
    case 'atomic':
      // TODO: fix error before using
      // const alignment = block.getData().get('alignment') || '';
      return `draft__media `;
    default:
      return 'draft__block';
  }
};
