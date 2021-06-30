var tercerConfig = {
  ecma: undefined,
  warnings: false,
  parse: {},
  compress: {},
  mangle: true, // Note `mangle.properties` is `false` by default.
  module: false,
  output: null,
  toplevel: false,
  nameCache: null,
  ie8: false,
  keep_classnames: undefined,
  keep_fnames: false,
  safari10: false,
};

var MINIMIZE_CONFIG = {
  UGLIFY: {
    sourceMap: true,
    extractComments: true,
    uglifyOptions: {
      debug: true,
      mangle: true,
      keep_fnames: false,
      compress: {
        inline: false,
      },
    },
    cache: true,
    parallel: true,
  },
};

module.exports = {
  tercerConfig: tercerConfig,
};
