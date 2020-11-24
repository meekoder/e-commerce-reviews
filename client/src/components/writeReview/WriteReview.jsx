import React from 'react';
import WhiteArrow from './WhiteArrow';
import styles from '../../../styles.css';

function WriteReview() {
  return (
    <div className={styles.grid}>
      <div className={styles.writeReviewBtn}>
        <div className={styles.wrapper}>
          <span className={styles.writeReviewText}>WRITE A REVIEW</span>
          <WhiteArrow />
        </div>
      </div>
      <div className={styles.borderBtn} />
    </div>
  );
}

export default WriteReview;
