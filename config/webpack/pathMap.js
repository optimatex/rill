const path = require('path');

function mapPathResolver(scheme, rootPath) {
  return Object.keys(scheme).reduce((acc, key) => {
    acc[key] = path.resolve(rootPath, scheme[key]);

    return acc;
  }, {});
}

var pathMap = {
  '@types': 'src/@types',
  '@scheme': 'src/@scheme',
  '@constants': 'src/@constants',
  _employee: 'src/_employee',
  assets: 'src/assets',
  pages: 'src/pages',
};

module.exports = {
  pathMap: pathMap,
  mapPathResolver: mapPathResolver,
};
