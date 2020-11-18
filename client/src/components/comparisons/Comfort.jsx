import React from 'react';
import styles from '../../../../public/styles.css';
import Bar from './Bar';

function Comfort() {
  return (
    <div className={styles.comparison}>
      <div className={styles.barTitle}>COMFORT</div>
      <Bar />
      <div className={styles.barLabels}>
        <span>UNCOMFORTABLE</span>
        <span>COMFORTABLE</span>
      </div>
    </div>
  );
}

export default Comfort;
