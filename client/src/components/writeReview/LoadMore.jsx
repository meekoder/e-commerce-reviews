import React, { useContext } from 'react';
import ReviewContext from '../ReviewContext';
import BlackArrow from './BlackArrow';
import styles from '../../../styles.css';

function LoadMore() {
  const { loadMore, setLoadMore } = useContext(ReviewContext);

  const loadMoreReviews = () => {
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
