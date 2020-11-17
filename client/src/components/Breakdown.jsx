import React, { useContext } from 'react';
import axios from 'axios';
import ReviewContext from './ReviewContext';
import styles from '../../../public/styles.css';

function Breakdown() {
  const { fiveStarCount, fourStarCount, threeStarCount, twoStarCount, oneStarCount, reviews, setReviews, currentShoe } = useContext(ReviewContext);
  function renderFiveStar() {
    axios
      .get(`/api/shoes/${currentShoe}/5`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }

  function renderFourStar() {
    axios
      .get(`/api/shoes/${currentShoe}/4`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }

  function renderThreeStar() {
    axios
      .get(`/api/shoes/${currentShoe}/3`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }

  function renderTwoStar() {
    axios
      .get(`/api/shoes/${currentShoe}/2`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }

  function renderOneStar() {
    axios
      .get(`/api/shoes/${currentShoe}/1`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.breakdown}>
      <h1>RATING BREAKDOWN</h1>
      <div className={styles.filters}>
        <h4 onClick={renderFiveStar} className={fiveStarCount > 0 ? styles.starFilter : null}>5 STARS</h4>
        <div>{fiveStarCount}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderFourStar} className={fourStarCount > 0 ? styles.starFilter : null}>4 STARS</h4>
        <div>{fourStarCount}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderThreeStar} className={threeStarCount > 0 ? styles.starFilter : null}>3 STARS</h4>
        <div>{threeStarCount}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderTwoStar} className={twoStarCount > 0 ? styles.starFilter : null}>2 STARS</h4>
        <div>{twoStarCount}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderOneStar} className={oneStarCount > 0 ? styles.starFilter : null}>1 STARS</h4>
        <div>{oneStarCount}</div>
      </div>
    </div>
  );
}

export default Breakdown;
