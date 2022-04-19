import colors from 'colors';
import inquirer from 'inquirer';
import keyManagerSingleton from '../lib/KeyManager.js';
import { isRequired } from '../utils/validation.js';

const key = {
  async set() {
    const keyManager = keyManagerSingleton.getInstance();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API key'.green + ' https://nomics.com',
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);
    if (key) {
      console.log('API key set'.blue);
    }
  },
  show() {
    try {
      const keyManager = keyManagerSingleton.getInstance();
      const key = keyManager.getKey();

      console.log('Current API key: ', key.yellow);
    } catch (error) {
      console.error(error.message.red);
    }
  },
  remove() {
    try {
      const keyManager = keyManagerSingleton.getInstance();
      keyManager.deleteKey();

      console.log('API key removed'.blue);
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

export default key;
