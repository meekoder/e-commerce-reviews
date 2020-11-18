import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [currentShoe, setCurrentShoe] = useState(8);
  const [reviewTotal, setReviewTotal] = useState(0);
  const [averageStars, setAverageStars] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/shoes/${currentShoe}`)
      .then((response) => {
        const reviewsArr = response.data[0].reviews;
        const starTotal = reviewsArr.reduce((a, b) => {
          return a + b.stars;
        }, 0);
        setReviews(response.data);
        setReviewTotal(reviewsArr.length);
        setAverageStars((starTotal / reviewsArr.length).toFixed(1));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ReviewContext.Provider value={{
      setReviews,
      reviews,
      currentShoe,
      reviewTotal,
      averageStars,
    }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;

ReviewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
