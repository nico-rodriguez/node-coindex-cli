import keyManagerSingleton from '../lib/KeyManager.js';
import cryptoAPISingleton from '../lib/CryptoAPI.js';

const check = {
  async price(cmd) {
    try {
      const keyManager = keyManagerSingleton.getInstance();
      const key = keyManager.getKey();

      const cryptoAPI = cryptoAPISingleton.getInstance(key);
      const priceStringData = await cryptoAPI.getPriceData(
        cmd.coin,
        cmd.currency
      );
      console.log(priceStringData);
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

export default check;
