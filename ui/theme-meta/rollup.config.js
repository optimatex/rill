import { default as createConf } from '../../config/rollup.config';
import pkg from './package.json';

const conf = createConf(pkg);
export { conf as default };
