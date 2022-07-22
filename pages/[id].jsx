import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import HomeLink from '../components/Links/HomeLink';
import CurrencyInfo from '../components/Cards/CurrencyInfo';
import useUpdateSSR from '../hooks/useUpdateSSR';

export default function Currency({ data }) {
  const [id, setId] = useState();
  const router = useRouter();

  useUpdateSSR(60000);

  useEffect(() => {
    setId(router.asPath.slice(1));
  }, [data]);

  return (
    <MainLayout>
      <HomeLink />
      <CurrencyInfo id={id} data={data[id]} />
    </MainLayout>
  );
}
export async function getServerSideProps(ctx) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ctx.query.id}&vs_currencies=gbp%2Cusd%2Ceur&include_market_cap=true&include_last_updated_at=true`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
