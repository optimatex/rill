module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testURL: 'http://localhost/',
  modulePaths: [],
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['/lib/', '/node_modules/'],
  moduleNameMapper: {
    '^test$': '<rootDir>/test',
  },
};
