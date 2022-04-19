# Node Coindex CLI

## About

A Node CLI for querying digital coin prices from Nomics API.

## Features

An implementation of the Singleton Pattern for the KeyManager and CryptoAPI instances.

The output is colored!

## Usage

```bash
$ coindex help
Usage: coindex [options] [command]

An Node CLI for querying digital coin prices

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  key             Manage API key -- https://nomics.com
  check           Check coin price info
  help [command]  display help for command
```

The `key` and `check` commands have an additional help message:

```bash
$ coindex key help
Usage: coindex-key [options] [command]

Options:
  -h, --help      display help for command

Commands:
  set             Set API key -- Get one at https://nomics.com
  show            Show API key
  remove          Remove API key
  help [command]  display help for command
```

```bash
$ coindex check help
Usage: coindex-check [options] [command]

Options:
  -h, --help       display help for command

Commands:
  price [options]  Check price of coins
  help [command]   display help for command
```

## Examples

### Managing the Nomics API key

First, set your Nomics API key:

```bash
$ coindex key set
? Enter API key https://nomics.com 123
```

You can verify that your key was saved:

```bash
$ coindex key show
Current API key:  123
```

Optionally, you may wish to remove your key from the CLI:

```bash
$ coindex key remove
API key removed
```

For setting a new key, it's not necessary to remove the old one. Setting a new key will override the old value.

### Querying for coin prices

Before querying coin prices, remember to set your Nomics API key. Otherwise, you'll get an error:

```bash
$ coindex check price
No API key found -- Get one at https://nomics.com
```

You'll also get an error if your API is invalid:

```bash
$ coindex check price
Your API key is invalid -- Get one at https://nomics.com
```

With default options:

```bash
$ coindex check price

Coin: BTC (Bitcoin) | Price: $41,018.88 | Rank: 1
Coin: ETH (Ethereum) | Price: $3,082.85 | Rank: 2
Coin: XRP (XRP) | Price: $0.77 | Rank: 6
```

Setting a coin and a currency:

```bash
$ coindex check price --coin=BTC --currency=EUR

Coin: BTC (Bitcoin) | Price: €38,061.87 | Rank: 1
```

## Running

Clone the repo and run either `npm start` (or `npm run dev` for using `nodemon`).

You can also create a sym link to the script for executing it from anywhere in the file system, with the command `coindex-cli`:

```bash
# Create sym link
$ npm link

# Use the CLI with the command
$ coindex-cli -h
```

For unlinking, run `npm unlink coindex-cli`.

## Acknowledgment

Thanks to [Brad Traversy](https://github.com/bradtraversy) for his [tutorial](https://www.youtube.com/watch?v=-6OAHsde15E&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&index=32).
