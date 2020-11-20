import React, { useContext } from 'react';
import ReviewContext from '../ReviewContext';
import BlackArrow from './BlackArrow';
import styles from '../../../../public/styles.css';

function LoadMore() {
  const { allReviews, reviews, setReviews } = useContext(ReviewContext);

  const loadMore = () => {
    const currReviewsLength = reviews.length;
    setReviews(allReviews.slice(0, currReviewsLength + 5));
  };

  return (
    <div className={styles.loadMoreBtn} role="button" onClick={loadMore} onKeyDown={loadMore} tabIndex={0}>
      <div className={styles.wrapper}>
        <span className={styles.loadMoreText}>LOAD MORE</span>
        <BlackArrow />
      </div>
    </div>
  );
}

export default LoadMore;
