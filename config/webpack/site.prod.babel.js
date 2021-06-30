import * as constants from './constants';
import * as utils from './utils';

const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const cssnano = require('cssnano');

module.exports = merge(constants.COMMON, constants.PROD_COMMON, {
  entry: constants.ENTRIES.CLIENT,
  output: {
    filename: constants.OUTPUT.CLIENT_MAIN_JS,
    path: path.resolve(__dirname, constants.OUTPUT.CLIENT_PATH),
    publicPath: '/',
  },
  plugins: [
    ...utils.getCommonPlugins(constants.ENV.PROD, constants.ENV.PROD_PATH),
    // new OptimizeCssAssetsPlugin(),
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: constants.tercerConfig,
      }),
    ],
    splitChunks: {
      minSize: 30000,
      minChunks: 1,
      cacheGroups: {
        vendor: constants.CACHE_GROUPS.VENDOR,
        styles: constants.CACHE_GROUPS.STYLES,
      },
    },
  },
});
