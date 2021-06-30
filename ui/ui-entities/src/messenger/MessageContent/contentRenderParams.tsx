import { React, RC } from '_employee/view';
import { Paragraph } from '_employee/ui-kit';

const renderParagraph = (children: RC, index: number) => (
  <Paragraph index={index} key={index}>
    {children}
  </Paragraph>
);

const renderLink = (url: string, children: RC) => <a key={url}>{children}</a>;

const renders = { renderParagraph, renderLink };

export default renders;
