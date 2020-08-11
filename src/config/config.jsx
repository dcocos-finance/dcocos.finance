import kovan from "./kovan.config";
import mainnet from "./mainnet.config";
const env = process.env.APP_ENV || 'kovan';

const config = {
  kovan,
  mainnet
};

export default config[env];
