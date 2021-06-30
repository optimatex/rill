var path = require('path');

module.exports.ENV = {
  DEV: 'dev',
  PROD: 'production',
  ENV_DEV_PATH: path.resolve(__dirname, '../../env/.env'),
  ENV_PROD_PATH: path.resolve(__dirname, '..', 'env/prod.env'),
};

module.exports.OUTPUT = {
  DEV_MAIN_JS: 'dev.js',
  CLIENT_MAIN_JS: '[name].js?v=[contenthash]',
  CLIENT_MAIN_JS_DEV: '[name].js',
  SERVER_MAIN_JS: 'server.js',
};

module.exports.CACHE_GROUPS = {
  VENDOR: {
    chunks: 'initial',
    name: 'vendor',
    test: 'vendor',
    enforce: true,
  },
};
