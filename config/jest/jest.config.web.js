module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-fourteen',
  automock: false,
  modulePaths: [],
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['/lib/', '/node_modules/'],
  moduleNameMapper: {
    '^test$': '<rootDir>/test',
  },
};
