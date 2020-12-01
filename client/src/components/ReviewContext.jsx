import React, { createContext, useState, useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import PropTypes from 'prop-types';
import axios from 'axios';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentShoe, setCurrentShoe] = useState(0);
  const [reviewTotal, setReviewTotal] = useState(0);
  const [averageStars, setAverageStars] = useState(0);
  const [averageRecommended, setAverageRecommended] = useState(0);
  const [avgStars, setAvgStars] = useState([0, 0, 0, 0, 0]);
  const [loadMore, setLoadMore] = useState(2);
  const [starTotals, setStarTotals] = useState([0, 0, 0, 0, 0]);
  const [viewModal, setViewModal] = useState(false);
  const [menuClicked, setMenuClicked] = useState({
    newest: true,
    helpful: false,
    relevant: false,
  });
  const [averageOpinions, setAverageOpinions] = useState({
    size: 0,
    width: 0,
    comfort: 0,
    quality: 0,
  });

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
      setStarTotals([1, 2, 3, 4, 5].map((x) => reviewsArr.filter((y) => y.stars === x).length));
      setAllReviews(reviewsArr);
      setReviews(reviewsArr.slice(0, 2));
      setReviewTotal(reviewsArr.length);
      setAverageStars((starTotal / reviewsArr.length).toFixed(1));
      setAverageRecommended(Math.floor((recommendedTotal / reviewsArr.length) * 20));
      setAverageOpinions({
        size: (sizeTotal / reviewsArr.length) * 20,
        width: (widthTotal / reviewsArr.length) * 20,
        comfort: (comfortTotal / reviewsArr.length) * 20,
        quality: (qualityTotal / reviewsArr.length) * 20,
      });
    }
    getReviews();
  }, []);

  return (
    <ReviewContext.Provider value={{
      viewModal,
      setViewModal,
      averageOpinions,
      starTotals,
      avgStars,
      setAvgStars,
      allReviews,
      setAllReviews,
      setReviews,
      reviews,
      selectedFilters,
      setSelectedFilters,
      currentShoe,
      reviewTotal,
      averageStars,
      averageRecommended,
      menuClicked,
      setMenuClicked,
      loadMore,
      setLoadMore,
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
