import React, { useContext } from 'react';
import ReviewContext from '../ReviewContext';
import BlackArrow from './BlackArrow';
import styles from '../../../../public/styles.css';

function LoadMore() {
  const { reviews, setReviews } = useContext(ReviewContext);
  
  return (
    <div className={styles.loadMoreBtn}>
      <div className={styles.wrapper}>
        <span className={styles.loadMoreText}>LOAD MORE</span>
        <BlackArrow />
      </div>
    </div>
  );
}

export default LoadMore;
