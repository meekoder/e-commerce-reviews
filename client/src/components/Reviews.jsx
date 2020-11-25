import React, { useContext } from 'react';
import Review from './Review';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';

function Reviews() {
  const { reviews, setReviews, selectedFilters } = useContext(ReviewContext);

  const filtered = reviews.filter((review) => {
    if (selectedFilters.length) {
      return selectedFilters.includes(review.stars);
    }
    return true;
  });

  return (
    <div className={styles.reviewList}>
      {filtered ? filtered.map((review) => (
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
