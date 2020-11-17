import React from 'react';
import styles from '../../../public/styles.css';

function Opinions() {
  return (
    <div className={styles.percentContainer}>
      <h4 className={styles.percent}>%</h4>
      <span className={styles.recommend}>of customers recommend this product</span>
    </div>
  );
}

export default Opinions;
