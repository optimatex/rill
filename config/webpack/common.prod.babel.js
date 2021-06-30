module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  bail: true,
  profile: false,
  context: properPath,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
};
