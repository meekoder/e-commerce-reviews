import React, { useContext } from 'react';
import Review from './Review';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';

function Reviews() {
  const {
    allReviews,
    selectedFilters,
    newestClicked,
    helpfulClicked,
    relevantClicked,
    loadMore,
  } = useContext(ReviewContext);

  let filtered = allReviews.filter((review) => {
    if (selectedFilters.length) {
      return selectedFilters.includes(review.stars);
    }
    return true;
  });

  if (newestClicked) {
    filtered = filtered.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
  } else if (helpfulClicked) {
    filtered = filtered.filter((r) => r.helpfulYes > 0).sort((a, b) => b.helpfulYes - a.helpfulYes);
  } else if (relevantClicked) {
    filtered = filtered.filter((r) => r.verified > 0);
  }

  return (
    <div className={styles.reviewList}>
      {filtered ? filtered.slice(0, loadMore).map((review) => (
        <Review
          key={review.userName}
          stars={review.stars}
          date={review.reviewDate}
          summary={review.summary}
          fullReview={review.fullReview}
          user={review.userName}
          image={review.image}
          recommended={review.recommended}
          verified={review.verified}
          helpfulYes={review.helpfulYes}
          helpfulNo={review.helpfulNo}
        />
      )) : null}
    </div>
  );
}

export default Reviews;
