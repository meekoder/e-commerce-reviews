import React from 'react';
import styles from '../../../../public/styles.css';
import Bar from './Bar';

function Size() {
  return (
    <div className={styles.comparison}>
      <div>SIZE</div>
      <Bar />
      <div className={styles.barLabels}>
        <span>TOO SMALL</span>
        <span>PERFECT</span>
        <span>TOO LARGE</span>
      </div>
    </div>
  );
}

export default Size;
