import React, { useContext, useState } from 'react';
import ReviewContext from '../ReviewContext';
import ShowingReviews from './ShowingReviews';
import styles from '../../../styles.css';

function Breakdown() {
  const {
    allReviews,
    reviews,
    selectedFilters,
    setSelectedFilters,
    setAvgStars,
    avgStars,
    starTotals,
  } = useContext(ReviewContext);
  const [doneLoading, setDoneLoading] = useState(false);

  if (reviews.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgStars([
      ((starTotals[4] / allReviews.length) * 100),
      ((starTotals[3] / allReviews.length) * 100),
      ((starTotals[2] / allReviews.length) * 100),
      ((starTotals[1] / allReviews.length) * 100),
      ((starTotals[0] / allReviews.length) * 100)]);
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
      {selectedFilters.length ? (<ShowingReviews toggleFilter={toggleFilter} />) : null}
      {[1, 2, 3, 4, 5].reverse().map(((i) => (
        <div className={styles.filters}>
          <h4 onClick={() => { toggleFilter(i) }} className={starTotals[i - 1] > 0 ? styles.starFilter : null}>{i} STARS</h4>
          <progress value={avgStars[5 - i]} max="100">
            {avgStars[5 - i]}
            <span>%</span>
          </progress>
          <div className={styles.starCount}>{starTotals[i - 1]}</div>
        </div>
      )))}
    </div>
  );
}

export default Breakdown;
