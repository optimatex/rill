var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TerserWebpackPlugin = require('terser-webpack-plugin');
var Dotenv = require('dotenv-webpack');
var pathModule = require('../../config/webpack/pathMap');

var loaders = require('../../config/webpack/loaders');
var dev = require('../../config/webpack/site.dev');

var isProd = process.env.NODE_ENV === 'production';

var aliases = pathModule.mapPathResolver(pathModule.pathMap, './');

var config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: aliases,
  },
  module: {
    rules: [loaders.typescript],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: 'src/index.html',
    }),
    new Dotenv({
      path: '../../env/.env',
      safe: true,
      systemvars: true,
      allowEmptyValues: true,
      debug: process.env.DEBUG,
    }),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  Object.assign(config, dev.defineDevServer(3004));
}

module.exports = config;
