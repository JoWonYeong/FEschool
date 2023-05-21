import React from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <>
      <img
        src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif'
        alt=''
        className={styles.imgLoading}
      />
    </>
  );
}
