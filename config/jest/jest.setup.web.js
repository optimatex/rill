require('@babel/polyfill');
require('@testing-library/jest-dom');
require('jest-styled-components');
require('@testing-library/jest-dom/extend-expect');
var fetch = require('jest-fetch-mock');

fetch.enableMocks();

jest.mock('draft-js/lib/generateRandomKey', function () {
  return function () {
    return '1';
  };
});
