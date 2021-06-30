module.exports = {
  projects: [
    '<rootDir>/packages/*/jest.config.js',
    '<rootDir>/realm/*/jest.config.js',
    '<rootDir>/state/*/jest.config.js',
    '<rootDir>/trance/*/jest.config.js',
    '<rootDir>/ui/*/jest.config.js',
  ],

  testPathIgnorePatterns: [
    '/lib/',
    '/node_modules/',
    'stezor/src/**/*',
    'lander-',
    'trance/',
    'packages/',
  ],
};
