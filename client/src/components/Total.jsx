import React, { useContext } from 'react';
import styles from '../../../public/styles.css';
import ReviewContext from './ReviewContext';

function Total() {
  const { reviewTotal, averageStars } = useContext(ReviewContext);

  return (
    <div className={styles.total}>
      <div className={styles.avgStars}>{averageStars}</div>
      <div className={styles.reviewCount}><strong>{reviewTotal}</strong> Reviews</div>
    </div>
  );
}

export default Total;
