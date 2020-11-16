import React from 'react';
import Review from './Review';

function Reviews(props) {
  const reviews = props.shoes[0].reviews;

  return (
    <div>
      {reviews.map((review) => <Review stars={review.stars} date={review.reviewDate} summary={review.summary} fullReview={review.fullReview} user={review.userName} image={review.image} recommended={review.recommended} verified={review.verified} helpfulYes={review.helpfulYes} helpfulNo={review.helpfulNo} />)}
    </div>
  );
}

export default Reviews;
