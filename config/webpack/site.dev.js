var path = require('path');
var webpack = require('webpack');

var constants = require('./constants');
var plugins = require('./plugins');

var plugins = {
  // plugins: [
  //   ...plugins.getCommonPlugins(constants.ENV.DEV, constants.ENV.DEV_PATH, {
  //     withoutVersion: true,
  //   }),
  //   new webpack.HotModuleReplacementPlugin(),
  // ],
};

var defineDevServer = (port) => ({
  devServer: {
    port: 3004,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
    historyApiFallback: true,
  },
});

var defineDevServer_old = (port) => ({
  devServer: {
    contentBase: path.join(__dirname, '../'),
    index: 'index.html',
    // hot: true,
    // compress: true,
    port: port,
    historyApiFallback: true,
  },
});

module.exports = {
  plugins,
  defineDevServer,
};
