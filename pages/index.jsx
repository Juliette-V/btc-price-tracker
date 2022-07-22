import classes from '../styles/Home.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CRYPTO_CURRENCIES, FIAT_CURRENCIES } from '../constants/currencies';
import { setBTCRate, setBtcUpdateTime, setDisclaimer } from '../store/actions';
import BTCInfo from '../components/Cards/BTCInfo';
import MainLayout from '../components/Layout/MainLayout';
import CurrencyLink from '../components/Links/CurrencyLink';
import useUpdateSSR from '../hooks/useUpdateSSR';

export default function Home({ btcData }) {
  const dispatch = useDispatch();

  useUpdateSSR(60000);

  useEffect(() => {
    dispatch(setDisclaimer(btcData.disclaimer));
    dispatch(setBtcUpdateTime(btcData.time.updated));
    FIAT_CURRENCIES.map((item) => {
      dispatch(setBTCRate(item.name, btcData.bpi[item.name.toUpperCase()].rate));
    });
  }, [btcData, dispatch]);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div>
          <BTCInfo />
          <div className={classes.currenciesWrapper}>
            {CRYPTO_CURRENCIES.map(({ name, fullname, img }) => (
              <CurrencyLink key={name} href={`/${name}`}>
                <img src={img} />
                <div>{fullname}</div>
              </CurrencyLink>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export async function getServerSideProps(ctx) {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const btcData = await res.json();
  return {
    props: {
      btcData,
    },
  };
}
