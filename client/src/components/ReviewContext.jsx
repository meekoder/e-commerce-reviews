import React, { createContext, useState, useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import PropTypes from 'prop-types';
import axios from 'axios';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState({});
  const [currentShoe, setCurrentShoe] = useState(21);
  const [reviewTotal, setReviewTotal] = useState(0);
  const [averageStars, setAverageStars] = useState(0);
  const [averageSize, setAverageSize] = useState(0);
  const [averageWidth, setAverageWidth] = useState(0);
  const [averageComfort, setAverageComfort] = useState(0);
  const [averageQuality, setAverageQuality] = useState(0);
  const [averageRecommended, setAverageRecommended] = useState(0);
  const [newestClicked, setNewestClicked] = useState(true);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [relevantClicked, setRelevantClicked] = useState(false);
  const [avgStars, setAvgStars] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    async function getReviews() {
      const url = document.URL;
      const parseURL = url.split('/');
      const id = Number(parseURL[parseURL.length - 1]) || 0;
      const res = await axios.get(`/api/products/${id}/reviews`);
      setCurrentShoe(Number(id));
      const reviewsArr = res.data[0].reviews;
      const starTotal = reviewsArr.reduce((a, b) => a + b.stars, 0);
      const sizeTotal = reviewsArr.reduce((a, b) => a + b.size, 0);
      const widthTotal = reviewsArr.reduce((a, b) => a + b.width, 0);
      const comfortTotal = reviewsArr.reduce((a, b) => a + b.comfort, 0);
      const qualityTotal = reviewsArr.reduce((a, b) => a + b.quality, 0);
      const recommendedTotal = reviewsArr.reduce((a, b) => a + b.recommended, 0);
      setAllReviews(reviewsArr);
      setReviews(reviewsArr.slice(0, 2));
      setReviewTotal(reviewsArr.length);
      setAverageStars((starTotal / reviewsArr.length).toFixed(1));
      setAverageSize(sizeTotal / reviewsArr.length);
      setAverageWidth(widthTotal / reviewsArr.length);
      setAverageComfort(comfortTotal / reviewsArr.length);
      setAverageQuality(qualityTotal / reviewsArr.length);
      setAverageRecommended(recommendedTotal / reviewsArr.length);
    }
    getReviews();
  }, []);

  return (
    <ReviewContext.Provider value={{
      avgStars,
      setAvgStars,
      allReviews,
      setAllReviews,
      setReviews,
      reviews,
      filteredReviews,
      setFilteredReviews,
      currentShoe,
      reviewTotal,
      averageStars,
      averageSize,
      averageWidth,
      averageComfort,
      averageQuality,
      averageRecommended,
      newestClicked,
      helpfulClicked,
      relevantClicked,
      setNewestClicked,
      setHelpfulClicked,
      setRelevantClicked,
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
