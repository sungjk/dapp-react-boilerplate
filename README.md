# dapp-react-boilerplate
[![Build Status](https://travis-ci.org/sungjk/dapp-react-boilerplate.svg?branch=master)](https://travis-ci.org/sungjk/dapp-react-boilerplate)

Boilerplate for creating a DApp with React and Next.js.

⚠️ This project is under development and is not intended to be used for day-to-day coding. Expect bugs and incomplete documentation.

## Prerequisites

* **Make sure you have [geth](https://github.com/ethereum/go-ethereum) installed.**

```bash
$ brew tap ethereum/ethereum
$ brew install ethereum
```

Or visit [Installation-Instructions-for-Mac](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Mac).

* **Install truffle for a development environment, testing framework and asset pipeline for Ethereum:**

```bash
$ npm install -g truffle
```

Or visit [truffle](https://github.com/trufflesuite/truffle) to see more.

* **Install [ganache](http://truffleframework.com/ganache/). it helps building a personal blockchain for Ethereum development you can use to deploy contracts, develop your applications, and run test.**

## Getting Started

```shell
# compile all contracts.
$ truffle compile

# deploy contracts to the Ethereum network(private or live).
$ truffle migrate

# for React application
$ yarn install
$ yarn run build
$ yarn run dev
```

## Built With

* [truffle](https://github.com/trufflesuite/truffle) - A development environment, testing framework and asset pipeline for Ethereum.

## Authors

* **Jeremy Kim** - *Initial work* - [sungjk](https://github.com/sungjk)

# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
