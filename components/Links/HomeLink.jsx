import Link from 'next/link';
import React from 'react';
import classes from '../../styles/HomeLink.module.scss';

export default function HomeLink() {
  return (
    <Link href={`/`}>
      <div className={classes.link}> &#8592; back to home</div>
    </Link>
  );
}
