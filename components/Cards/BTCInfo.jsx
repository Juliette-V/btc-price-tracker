import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FIAT_CURRENCIES } from '../../constants/currencies';
import classes from '../../styles/CurrencyInfo.module.scss';

export default function BTCInfo() {
  const btcInfo = useSelector((state) => state.BTC);
  return (
    <div className={classes.mainContainer}>
      <h2>BITCOIN PRICE (BTC)</h2>
      <div className={classes.prices}>
        {FIAT_CURRENCIES.map((item) => (
          <div key={item.name} className={classes.price}>
            <div className={classes.currency}>{item.name.toUpperCase()}</div>
            {btcInfo[item.name]}
            {item.symbol}
          </div>
        ))}
      </div>
      <div className={classes.time}>Last update: {moment(btcInfo.time).format('LLL')}</div>
      <div className={classes.disclaimer}>{btcInfo.disclaimer}</div>
    </div>
  );
}
