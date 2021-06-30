var getCommonPlugins = (env, envPath) => [
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

module.exports = {
  getCommonPlugins,
};
