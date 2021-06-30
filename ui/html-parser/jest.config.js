// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultJestConfig = require('../../config/jest/jest.config.web');

module.exports = {
  ...defaultJestConfig,
  displayName: pkg.name,
  setupFilesAfterEnv: ['../../config/jest/jest.setup.web.js'],
};
