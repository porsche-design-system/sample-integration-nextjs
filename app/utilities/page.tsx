import React from 'react';
import { color, text } from '@porsche-design-system/utilities';
import styles from './utilities.module.scss';

export const metadata = {
  title: 'NextJS sample project - Utilities',
};

export default function UtilitiesPage() {
  return (
    <>
      <div style={text.medium}>JS utilities</div>
      <div style={{ width: 50, height: 50, background: color.brand }} />
      <div className={styles.textSizeMedium}>Scss utilities</div>
      <div style={{ width: 50, height: 50 }} className={styles.backgroundColorPds} />
    </>
  );
}
