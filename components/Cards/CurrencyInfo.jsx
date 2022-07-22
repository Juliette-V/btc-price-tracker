import moment from 'moment';
import React from 'react';
import { CRYPTO_CURRENCIES, FIAT_CURRENCIES } from '../../constants/currencies';
import classes from '../../styles/CurrencyInfo.module.scss';

const renderPrices = (data, addToName = '') => {
  return (
    <div className={classes.prices}>
      {FIAT_CURRENCIES.map((item) => (
        <div key={item.name} className={classes.price}>
          <div className={classes.currency}>{item.name.toUpperCase()}</div>
          {data[`${item.name}${addToName}`]}
          {item.symbol}
        </div>
      ))}
    </div>
  );
};

export default function CurrencyInfo({ id, data }) {
  const currCurrency = CRYPTO_CURRENCIES.find((item) => item.name === id);
  return (
    data && (
      <div className={classes.mainContainer}>
        <h2>{`${currCurrency?.fullname.toUpperCase()} PRICE (${currCurrency?.symbol.toUpperCase()})`}</h2>
        {renderPrices(data)}
        <h2>MARKET CAP</h2>
        {renderPrices(data, '_market_cap')}
        <div className={classes.time}>Last update: {moment(Number(`${data.last_updated_at}000`)).format('LLL')}</div>
      </div>
    )
  );
}
