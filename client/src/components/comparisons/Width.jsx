import React from 'react';
import styles from '../../../../public/styles.css';
import Bar from './Bar';

function Width() {
  return (
    <div className={styles.comparison}>
      <div className={styles.barTitle}>WIDTH</div>
      <Bar />
      <div className={styles.barLabels}>
        <span>TOO NARROW</span>
        <span>PERFECT</span>
        <span>TOO WIDE</span>
      </div>
    </div>
  );
}

export default Width;
