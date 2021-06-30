const pkg = require('./package.json');
const defaultJestConfig = require('../../config/jest/jest.config');

module.exports = {
  ...defaultJestConfig,
  displayName: pkg.name,
  setupFilesAfterEnv: ['../../config/jest/jest.setup.js'],
};
