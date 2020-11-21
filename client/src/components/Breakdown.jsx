import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReviewContext from './ReviewContext';
import styles from '../../../public/styles.css';

function Breakdown() {
  const { allReviews, setAllReviews, reviews, setReviews, currentShoe, setAvgStars, avgStars, setFilteredReviews, filteredReviews } = useContext(ReviewContext);
  const [doneLoading, setDoneLoading] = useState(false);
  const [starCount, setStarCount] = useState([]);
  const [filtersClicked, setFiltersClicked] = useState([]);

  useEffect(() => {
    const starCounts = [];
    for (let i = 1; i < 6; i += 1) {
      axios
        .get(`/api/shoes/${currentShoe}/${i}`)
        .then((res) => {
          starCounts.push(res.data[0].reviews.length);
          setStarCount(starCounts);
        });
    }
  }, []);

  if (reviews.length > 0 && !doneLoading) {
    const filteredStars = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
    };
    allReviews.forEach((r) => filteredStars[r.stars].push(r));
    setFilteredReviews({ filteredStars })
    setDoneLoading(true);
    setAvgStars([((starCount[4] / allReviews.length) * 100), ((starCount[3] / allReviews.length) * 100), ((starCount[2] / allReviews.length) * 100), ((starCount[1] / allReviews.length) * 100), ((starCount[0] / allReviews.length) * 100)]);
  }

  const renderFilteredStars = (stars) => {
    console.log(filtersClicked)
    console.log(filteredReviews)
    if (filtersClicked.length) {
      setAllReviews([...allReviews, ...filteredReviews.filteredStars[stars]]);
      setReviews([...allReviews, ...filteredReviews.filteredStars[stars]].slice(0, 2));
    } else {
      setAllReviews(filteredReviews.filteredStars[stars]);
      setReviews(filteredReviews.filteredStars[stars].slice(0, 2));
    }
  };

  return (
    <div className={styles.breakdown}>
      <h6>RATING BREAKDOWN</h6>
      {filtersClicked.length ? (
        <div className={styles.showingReviews}>
          Showing Reviews:
          <div className={styles.filters} id={styles.selectedFilter}>
            <h4 className={styles.starFilter}>5 STARS</h4>
          </div>
        </div>
      ) : null}
      <div className={styles.filters}>
        <h4 onClick={() => { renderFilteredStars(5); setFiltersClicked([...filtersClicked, filteredReviews.filteredStars['5']]); }} className={starCount[4] > 0 ? styles.starFilter : null}>5 STARS</h4>
        <progress value={avgStars[0]} max="100">
          {avgStars[0]}
          <span>%</span>
        </progress>
        <div className={styles.starCount}>{starCount[4]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={() => renderFilteredStars(4)} className={starCount[3] > 0 ? styles.starFilter : styles.noStarFilter}>4 STARS</h4>
        <progress value={avgStars[1]} max="100">
          {avgStars[1]}
          <span>%</span>
        </progress>
        <div className={styles.starCount}>{starCount[3]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={() => renderFilteredStars(3)} className={starCount[2] > 0 ? styles.starFilter : styles.noStarFilter}>3 STARS</h4>
        <progress value={avgStars[2]} max="100">
          {avgStars[2]}
          <span>%</span>
        </progress>
        <div className={styles.starCount}>{starCount[2]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={() => renderFilteredStars(2)} className={starCount[1] > 0 ? styles.starFilter : styles.noStarFilter}>2 STARS</h4>
        <progress value={avgStars[3]} max="100">
          {avgStars[3]}
          <span>%</span>
        </progress>
        <div className={styles.starCount}>{starCount[1]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={() => renderFilteredStars(1)} className={starCount[0] > 0 ? styles.starFilter : styles.noStarFilter}>1 STARS</h4>
        <progress value={avgStars[4]} max="100">
          {avgStars[4]}
          <span>%</span>
        </progress>
        <div className={styles.starCount}>{starCount[0]}</div>
      </div>
    </div>
  );
}

export default Breakdown;
