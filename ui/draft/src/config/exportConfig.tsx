import * as React from 'react';

/* eslint-disable consistent-return */
export default {
  styleToHTML: style => {
    if (style === 'BOLD') {
      return <strong />;
    }
    if (style === 'STRIKETHROUGH') {
      return <s />;
    }
  },
  blockToHTML: block => {
    const { type } = block;
    if (type === 'code-block') {
      return <pre />;
    }
    if (type === 'atomic') {
      const className = block.data.alignment || '';
      return {
        start: `<figure class='contentMedia ${className}'>`,
        end: '</figure>',
        empty: ' ',
      };
    }
  },
  entityToHTML: (entity, originalText) => {
    const { type, data } = entity;
    if (type === 'LINK') {
      const defineFollow = () => {
        if (data.url.indexOf(window.DOMAIN) === -1) return 'nofollow';
        return 'index';
      };
      const atrs = {
        href: data.url,
        target: '_blank',
        rel: defineFollow(),
      };
      if (data.look !== '0') atrs['data-look'] = data.look;
      if (data.icon) atrs['data-i'] = data.icon;
      // TODO: Define what to do with rel="noreferrer noopener"
      return <a {...atrs}>{originalText}</a>;
    }
    if (type === 'NODELINK') {
      return (
        <a href={data.id} data-type="post">
          {originalText}
        </a>
      );
    }
    if (type === 'photos') {
      const arr = JSON.stringify(data.array);
      return `<img data-photos='${arr}' data-l='${data.layout}'>`;
    }
    if (type === 'youtubes') {
      const arr = JSON.stringify(data.array);
      return `<img data-youtubes='${arr}' data-l='${data.layout}'>`;
    }
    return originalText;
  },
};
