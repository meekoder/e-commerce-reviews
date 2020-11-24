import React, { useContext } from 'react';
import styles from '../../styles.css';
import Stars from './Stars';
import ReviewContext from './ReviewContext';

function Total() {
  const { reviewTotal, averageStars } = useContext(ReviewContext);

  return (
    <div className={styles.total}>
      <div className={styles.avgStars}>{averageStars}</div>
      <div className={styles.starReviewCount}>
        <Stars />
        <div className={styles.reviewCount}>
          <strong>{reviewTotal}</strong>
          Reviews
        </div>
      </div>
    </div>
  );
}

export default Total;
