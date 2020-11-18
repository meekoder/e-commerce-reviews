import React from 'react';
import styles from '../../../../public/styles.css';
import Bar from './Bar';

function Quality() {
  return (
    <div className={styles.comparison}>
      <div className={styles.barTitle}>QUALITY</div>
      <Bar />
      <div className={styles.barLabels}>
        <span>POOR</span>
        <span>PERFECT</span>
      </div>
    </div>
  );
}

export default Quality;
