var viewPortConfig = {
  viewportWidth: 1400,
  viewportHeight: 1000,
};

var pathConfig = {
  integrationFolder: 'cypress/integration',
};

var baseConfig = {
  experimentalFetchPolyfill: true,
  nodeVersion: 'system',
  env: {
    coverage: false,
  },
};

var recordConfig = {
  video: false,
};

module.exports = {
  viewPortConfig: viewPortConfig,
  pathConfig: pathConfig,
  baseConfig: baseConfig,
  recordConfig: recordConfig,
};
