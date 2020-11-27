import React, { useContext } from 'react';
import styles from '../../styles.css';
import ReviewContext from './ReviewContext';

function Opinions() {
  const { averageRecommended } = useContext(ReviewContext);

  return (
    <div className={styles.percentContainer}>
      <h4 className={styles.percent}>{averageRecommended}%</h4>
      <span className={styles.recommend}>of customers recommend this product</span>
    </div>
  );
}

export default Opinions;
