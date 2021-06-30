import * as utils from './utils';
import * as constants from './constants';

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(constants.COMMON, constants.DEV_COMMON, {
  entry: constants.ENTRIES.SERVER,
  output: {
    filename: constants.OUTPUT.SERVER_MAIN_JS,
    path: path.resolve(__dirname, constants.OUTPUT.SERVER_PATH),
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: ['@loadable/component', 'react-helmet'],
  plugins: [
    ...utils.getCommonPlugins(constants.ENV.PROD, constants.ENV.PROD_PATH),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      constants.TS_LOADER,
      constants.CSS_MODULE_LOADER_PROD,
      constants.SASS_EXTRACTOR,
      constants.CSS_EXTRACTOR,
      constants.HTML_LOADER,
      constants.FONT_EXTRACTOR,
      constants.FONT_EXTRACTOR_2,
    ],
  },
});
