import React from 'react';
import classes from '../../styles/MainLayout.module.scss';

export default function MainLayout({ children }) {
  return (
    <>
      <header className={classes.header}>
        <h1>LIVE CRYPTOCURRENCY PRICE TRACKER</h1>
      </header>
      <div className={classes.bodyWrapper}>{children}</div>
    </>
  );
}
