import * as constants from './constants';
import * as utils from './utils';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(constants.COMMON, constants.DEV_COMMON, {
  entry: constants.ENTRIES.CLIENT,
  output: {
    filename: constants.OUTPUT.CLIENT_MAIN_JS,
    path: path.resolve(__dirname, constants.OUTPUT.CLIENT_PATH),
    publicPath: '/',
  },
  plugins: [
    ...utils.getCommonPlugins(constants.ENV.DEV, constants.ENV.DEV_PATH),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      constants.TS_LOADER,
      constants.CSS_MODULE_LOADER_PROD,
      constants.CSS_EXTRACTOR,
      constants.HTML_LOADER,
      constants.FONT_EXTRACTOR,
      constants.FONT_EXTRACTOR_2,
    ],
  },
  optimization: {
    splitChunks: {
      name: false,
      cacheGroups: {
        styles: constants.CACHE_GROUPS.STYLES,
      },
    },
  },
});
