import React, { useContext } from 'react';
import Review from './Review';
import ReviewContext from './ReviewContext';

function Reviews() {
  const { reviews } = useContext(ReviewContext);

  return (
    <div>
      {reviews[0] ? reviews[0].reviews.map((review) => <Review stars={review.stars} date={review.reviewDate} summary={review.summary} fullReview={review.fullReview} user={review.userName} image={review.image} recommended={review.recommended} verified={review.verified} helpfulYes={review.helpfulYes} helpfulNo={review.helpfulNo} />) : null}
    </div>
  );
}

export default Reviews;
