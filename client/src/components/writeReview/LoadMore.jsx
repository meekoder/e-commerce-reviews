import React, { useContext } from 'react';
import ReviewContext from '../ReviewContext';
import BlackArrow from './BlackArrow';
import styles from '../../../styles.css';

function LoadMore() {
  const { allReviews, reviews, setReviews, loadMore, setLoadMore } = useContext(ReviewContext);

  const loadMoreReviews = () => {
    // const currReviewsLength = reviews.length;
    // setReviews(allReviews.slice(0, currReviewsLength + 5));
    setLoadMore(loadMore + 5);
  };

  return (
    <div className={styles.loadMoreBtn} role="button" onClick={loadMoreReviews} onKeyDown={loadMoreReviews} tabIndex={0}>
      <div className={styles.wrapper}>
        <span className={styles.loadMoreText}>LOAD MORE</span>
        <BlackArrow />
      </div>
    </div>
  );
}

export default LoadMore;
