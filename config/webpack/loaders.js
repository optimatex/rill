const OUTPUT = require('./constants');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const typescript = {
  test: /\.[tj]s(x?)$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        onlyCompileBundledFiles: true,
      },
    },
  ],
};

const CSS_MODULE_LOADER = {
  test: /module\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      use: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
      },
    },
  ],
};

const CSS_MODULE_LOADER_DEV = {
  test: /module\.scss$/,
  use: [
    {
      use: 'style-loader?sourceMap',
    },
    {
      use:
        'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: [path.resolve(__dirname, '../src')],
      },
    },
  ],
};

const CSS_MODULE_LOADER_PROD = {
  test: /module\.scss$/,
  use: [
    {
      use: MiniCssExtractPlugin.loader,
      options: {
        publicPath: OUTPUT.CLIENT_PATH,
      },
    },
    {
      use: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
    {
      use: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
      },
    },
  ],
};

const SASS_EXTRACTOR = {
  test: /\.scss$/,
  exclude: /module\.scss$/,
  use: [
    {
      use: MiniCssExtractPlugin.loader,
      options: {
        publicPath: OUTPUT.CLIENT_PATH,
      },
    },
    'css-loader',
    'sass-loader',
  ],
};

const CSS_EXTRACTOR = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: OUTPUT.CLIENT_PATH,
      },
    },
    'css-loader',
  ],
};

const HTML_LOADER = {
  test: /\.html$/i,
  use: 'html-loader',
};

const FONT_EXTRACTOR = {
  test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  use: 'url-loader',
  options: {
    // Limit at 50k. Above that it emits separate files
    limit: 80000,
    // url-loader sets mimetype if it's passed.
    // Without this it derives it from the file extension
    mimetype: 'application/font-woff',
    // Output below fonts directory
    name: '[name].[ext]',
  },
};

const FONT_EXTRACTOR_2 = {
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: 'url-loader',
};

module.exports = {
  typescript,
};
