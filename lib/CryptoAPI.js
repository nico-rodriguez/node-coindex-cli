import axios from 'axios';
import colors from 'colors';

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOptions, currencyOption) {
    try {
      const { data } = await axios.get(
        `${this.baseURL}?key=${this.apiKey}&ids=${coinOptions}&convert=${currencyOption}&per-page=3&page=1`
      );
      const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyOption,
      });

      return data.reduce((prev, curr) => {
        return (
          prev +
          `\nCoin: ${curr.symbol.yellow} (${curr.name}) | Price: ${
            priceFormatter.format(curr.price).green
          } | Rank: ${curr.rank.blue}`
        );
      }, '');
    } catch (error) {
      handleAPIError(error);
    }
  }
}

function handleAPIError(error) {
  // Wrong API key - Unauthorized
  if (error.response.status === 401) {
    throw new Error('Your API key is invalid -- Get one at https://nomics.com');
  } else if (error.response.status === 404) {
    // Couldn't reach the server
    throw new Error('API server not responding. Try again later.');
  } else {
    throw new Error(error.message);
  }
}

// Singleton pattern for the CryptoAPI instance
const cryptoAPISingleton = (function () {
  let cryptoAPIInstance;

  function createInstance(key) {
    return new CryptoAPI(key);
  }

  return {
    getInstance: function (key) {
      if (!cryptoAPIInstance) {
        cryptoAPIInstance = createInstance(key);
      }

      return cryptoAPIInstance;
    },
  };
})();

export default cryptoAPISingleton;
