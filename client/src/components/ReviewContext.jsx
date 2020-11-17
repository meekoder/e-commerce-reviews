import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [currentShoe, setCurrentShoe] = useState(7);
  const [reviewTotal, setReviewTotal] = useState(0);
  const [averageStars, setAverageStars] = useState(0);
  // const [fiveStarCount, setFiveStarCount] = useState(0);
  // const [fourStarCount, setFourStarCount] = useState(0);
  // const [threeStarCount, setThreeStarCount] = useState(0);
  // const [twoStarCount, setTwoStarCount] = useState(0);
  // const [oneStarCount, setOneStarCount] = useState(0);

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
        // for (let i = 1; i < 6; i += 1) {
        //   axios
        //     .get(`/api/shoes/${currentShoe}/${i}`)
        //     .then((res) => {
        //       switch (true) {
        //         case (i === 5):
        //           setFiveStarCount(res.data[0].reviews.length);
        //           break;
        //         case (i === 4):
        //           setFourStarCount(res.data[0].reviews.length);
        //           break;
        //         case (i === 3):
        //           setThreeStarCount(res.data[0].reviews.length);
        //           break;
        //         case (i === 2):
        //           setTwoStarCount(res.data[0].reviews.length);
        //           break;
        //         case (i === 1):
        //           setOneStarCount(res.data[0].reviews.length);
        //           break;
        //         default:
        //           console.log('invalid');
        //       }
        //     });
        // }
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
      // fiveStarCount,
      // fourStarCount,
      // threeStarCount,
      // twoStarCount,
      // oneStarCount,
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
