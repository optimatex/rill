import { React } from '../src/_employee/view';
import { has } from '../src/_employee/utils';

export const renderString = (value: string) => (
  <div data-test="string-value" key={value}>
    {value}
  </div>
);

export const renderNumber = (value: number) => (
  <div data-test="number-value" key={value}>
    {value}
  </div>
);

// export const renderArray = (list: unknown) => list.map(item:(
//   <div data-test="number-value" key={value}>
//     {value}
//   </div>
// );

export const renderObjectKey = (value: string) => (
  <div data-test="object-key" key={value}>
    {value}
  </div>
);

export const renderObjectWrap = (k: string, v: unknown) => (
  <div data-test="obj-wrap">
    {k} {v}
  </div>
);

const chain = [
  {
    test: (v) => has('userName')(v),
    render: (v) => (
      <span data-test="userAge" key={String(v)}>
        {v.userAge}
      </span>
    ),
  },
  {
    test: (v) => has('bookName')(v),
    render: (v) => (
      <span data-test="pagesCount" key={String(v)}>
        {v.pagesCount}
      </span>
    ),
  },
];
