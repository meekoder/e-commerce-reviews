import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';

function Breakdown() {
  const {
    allReviews,
    reviews,
    selectedFilters,
    setSelectedFilters,
    currentShoe,
    setAvgStars,
    avgStars,
  } = useContext(ReviewContext);
  const [doneLoading, setDoneLoading] = useState(false);
  const [starCount, setStarCount] = useState([]);

  useEffect(() => {
    const starCounts = [];
    for (let i = 1; i < 6; i += 1) {
      axios
        .get(`/api/products/${currentShoe}/reviews/${i}`)
        .then((res) => {
          starCounts.push(res.data[0].reviews.length);
          setStarCount(starCounts);
        });
    }
  }, []);

  if (reviews.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgStars([((starCount[4] / allReviews.length) * 100), ((starCount[3] / allReviews.length) * 100), ((starCount[2] / allReviews.length) * 100), ((starCount[1] / allReviews.length) * 100), ((starCount[0] / allReviews.length) * 100)]);
  }

  const toggleFilter = (stars) => {
    if (selectedFilters.includes(stars)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== stars));
      return;
    }
    setSelectedFilters([...selectedFilters, stars])
  };

  return (
    <div className={styles.breakdown}>
      <h6>RATING BREAKDOWN</h6>
      {selectedFilters.length ? (
        <div className={styles.showingReviews}>
          Showing Reviews:
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              selectedFilters.includes(i)
                ? (
                  <div className={styles.filters} id={styles.selectedFilter}>
                    <h4 className={styles.starFilter} onClick={() => { toggleFilter(i) }}>{`${i} STARS`}</h4>
                  </div>
                )
                : null
            )})}
        </div>
      ) : null}
      {[1, 2, 3, 4, 5].reverse().map((i => {
        return (
          <div className={styles.filters}>
            <h4 onClick={() => { toggleFilter(i) }} className={starCount[i - 1] > 0 ? styles.starFilter : null}>{i} STARS</h4>
            <progress value={avgStars[5 - i]} max="100">
              {avgStars[5 - i]}
              <span>%</span>
            </progress>
            <div className={styles.starCount}>{starCount[i - 1]}</div>
          </div>
        )
      }))}
    </div>
  );
}

export default Breakdown;
