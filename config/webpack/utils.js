const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

export const getDevPlugins = () => [];

export const getProdPlugins = () => [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
];

export const getCommonPlugins = (env, envPath) => [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
  new Dotenv({
    path: envPath,
    safe: true,
    systemvars: true,
    allowEmptyValues: true,
    debug: process.env.DEBUG,
  }),
  new webpack.IgnorePlugin(
    /^\.\/(?!(en|ru|ua))(.+)$/,
    /validatorjs\/src\/lang/,
  ),
];
