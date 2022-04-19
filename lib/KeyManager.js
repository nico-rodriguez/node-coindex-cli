import Configstore from 'configstore';

class KeyManager {
  constructor() {
    this.conf = new Configstore('coindex-cli');
  }

  setKey(key) {
    this.conf.set('apiKey', key);
  }

  getKey() {
    const key = this.conf.get('apiKey');

    if (!key) {
      throw new Error('No API key found -- Get one at https://nomics.com');
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get('apiKey');

    if (!key) {
      throw new Error('No API key found -- Get one at https://nomics.com');
    }

    this.conf.delete('apiKey');
  }
}

// Singleton pattern for the KeyManager instance
const keyManagerSingleton = (function () {
  let keyManagerInstance;

  function createInstance() {
    return new KeyManager();
  }

  return {
    getInstance: function () {
      if (!keyManagerInstance) {
        keyManagerInstance = createInstance();
      }

      return keyManagerInstance;
    },
  };
})();

export default keyManagerSingleton;
