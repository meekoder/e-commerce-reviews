import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReviewContext from './ReviewContext';
import styles from '../../../public/styles.css';

function Breakdown() {
  const { reviews, setReviews, currentShoe } = useContext(ReviewContext);
  const [doneLoading, setDoneLoading] = useState(false);
  const [avgStars, setAvgStars] = useState([0, 0, 0, 0, 0]);
  const [starCount, setStarCount] = useState([]);

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
    setDoneLoading(true);
    setAvgStars([((starCount[4] / reviews[0].reviews.length) * 100), ((starCount[3] / reviews[0].reviews.length) * 100), ((starCount[2] / reviews[0].reviews.length) * 100), ((starCount[1] / reviews[0].reviews.length) * 100), ((starCount[0] / reviews[0].reviews.length) * 100)]);
  }

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
      <h6>RATING BREAKDOWN</h6>
      <div className={styles.filters}>
        {console.log(avgStars)}
        <h4 onClick={renderFiveStar} className={starCount[4] > 0 ? styles.starFilter : null}>5 STARS</h4>
        <progress value={avgStars[0]} max="100"> `${avgStars[0]}%` </progress>
        <div className={styles.starCount}>{starCount[4]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderFourStar} className={starCount[3] > 0 ? styles.starFilter : null}>4 STARS</h4>
        <progress value={avgStars[1]} max="100"> `${avgStars[1]}%` </progress>
        <div className={styles.starCount}>{starCount[3]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderThreeStar} className={starCount[2] > 0 ? styles.starFilter : null}>3 STARS</h4>
        <progress value={avgStars[2]} max="100"> `${avgStars[2]}%` </progress>
        <div className={styles.starCount}>{starCount[2]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderTwoStar} className={starCount[1] > 0 ? styles.starFilter : null}>2 STARS</h4>
        <progress value={avgStars[3]} max="100"> `${avgStars[3]}%` </progress>
        <div className={styles.starCount}>{starCount[1]}</div>
      </div>
      <div className={styles.filters}>
        <h4 onClick={renderOneStar} className={starCount[0] > 0 ? styles.starFilter : null}>1 STARS</h4>
        <progress value={avgStars[4]} max="100"> `${avgStars[4]}%` </progress>
        <div className={styles.starCount}>{starCount[0]}</div>
      </div>
    </div>
  );
}

export default Breakdown;
