import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Total(props) {
  const [reviewCount, setReviewCount] = useState(0);
  const [averageStars, setAverageStars] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/shoes/${props.id}`)
      .then((res) => {
        const reviews = res.data[0].reviews;
        const numOfReviews = reviews.length;

        let starCount = 0;
        setReviewCount(numOfReviews);
        reviews.forEach(review => starCount += review.stars);
        const avgStars = starCount / reviewCount;
        setAverageStars(avgStars.toFixed(1));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className='total'>
      <h1>{reviewCount} Reviews</h1>
      <h2>{averageStars}</h2>
    </div>
  );
}

export default Total;
