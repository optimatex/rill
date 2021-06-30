import { defaultRender } from './testRender';

export const wrappersComposerTest = (currentRenderWrapper, renderWrapper) => {
  const finalWrapper = currentRenderWrapper(renderWrapper);

  return () => finalWrapper();
};
