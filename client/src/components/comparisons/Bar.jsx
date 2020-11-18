import React from 'react';
import styles from '../../../../public/styles.css';

function Bar() {
  return (
    <div className={styles.comparisonBar}>
      <div className={styles.triangle} />
      <div className={styles.gaps}>
        <div className={styles.gap} id={styles.gap2} />
        <div className={styles.gap} id={styles.gap3} />
        <div className={styles.gap} id={styles.gap4} />
      </div>
    </div>
  );
}

export default Bar;
