import * as React from 'react';

const map = {
  post: <div>Post</div>,
};

export const viewFactoryResolver = (e) => map[e];
