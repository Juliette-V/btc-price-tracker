import Link from 'next/link';
import React from 'react';
import classes from '../../styles/CurrencyLink.module.scss';

export default function CurrencyLink({ href, children }) {
  return (
    <Link href={href}>
      <div className={classes.link}> {children}</div>
    </Link>
  );
}
