import React, { useContext } from 'react';
import styles from '../../../public/styles.css';
import ReviewContext from './ReviewContext';

function Opinions() {
  const { averageRecommended } = useContext(ReviewContext);
  const avg = Math.floor(averageRecommended * 20);

  return (
    <div className={styles.percentContainer}>
      <h4 className={styles.percent}>{avg}%</h4>
      <span className={styles.recommend}>of customers recommend this product</span>
    </div>
  );
}

export default Opinions;
