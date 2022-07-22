import { Fragment } from 'react';
import eth from '../resources/images/eth.png';
import tether from '../resources/images/tether.png';
import bnb from '../resources/images/bnb.png';
import sol from '../resources/images/sol.png';
import near from '../resources/images/near.webp';
import tron from '../resources/images/tron.png';

export const CRYPTO_CURRENCIES = [
  { name: 'ethereum', symbol: 'ETH', fullname: 'Ethereum', img: eth.src },
  { name: 'tether', symbol: 'USDT', fullname: 'Teather', img: tether.src },
  { name: 'binancecoin', symbol: 'BNB', fullname: 'Binance Coin', img: bnb.src },
  { name: 'solana', symbol: 'SOL', fullname: 'Solana', img: sol.src },
  { name: 'near', symbol: 'NEAR', fullname: 'NEAR Protocol', img: near.src },
  { name: 'tron', symbol: 'TRX', fullname: 'TRON', img: tron.src },
];
export const FIAT_CURRENCIES = [
  { name: 'usd', symbol: <Fragment>&#36;</Fragment> },
  { name: 'eur', symbol: <Fragment>&euro;</Fragment> },
  { name: 'gbp', symbol: <Fragment>&pound;</Fragment> },
];
