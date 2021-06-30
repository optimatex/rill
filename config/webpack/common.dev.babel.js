module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
};

function devServerConfig(path) {
  return {
    contentBase: path,
    index: 'index.html',
    port: 3001,
    historyApiFallback: true,
  };
}

module.exports = {
  devServerConfig,
};
