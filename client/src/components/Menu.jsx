import React, { useState, useContext } from 'react';
import ReviewContext from './ReviewContext';
import axios from 'axios';
import styles from '../../../public/styles.css';

function Menu() {
  const {
    newestClicked,
    setNewestClicked,
    helpfulClicked,
    setHelpfulClicked,
    relevantClicked,
    setRelevantClicked,
    setReviews,
    currentShoe,
  } = useContext(ReviewContext);

  const toggleNewest = () => {
    setNewestClicked(true);
    setHelpfulClicked(false);
    setRelevantClicked(false);
    axios
      .get(`/api/shoes/${currentShoe}/newest`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  };

  const toggleHelpful = () => {
    setHelpfulClicked(true);
    setNewestClicked(false);
    setRelevantClicked(false);
    axios
      .get(`/api/shoes/${currentShoe}/helpful`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  };

  const toggleRelevant = () => {
    setRelevantClicked(true);
    setNewestClicked(false);
    setHelpfulClicked(false);
    axios
      .get(`/api/shoes/${currentShoe}/relevant`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ul className={styles.menu}>
      <li className={newestClicked && styles.activeMenu}>
        <button type="button" onClick={toggleNewest} className={newestClicked && styles.activeBtn}>NEWEST</button>
      </li>
      <li className={helpfulClicked && styles.activeMenu}>
        <button type="button" onClick={toggleHelpful} className={helpfulClicked && styles.activeBtn}>HELPFUL</button>
      </li>
      <li className={relevantClicked && styles.activeMenu}>
        <button type="button" onClick={toggleRelevant} className={relevantClicked && styles.activeBtn}>RELEVANT</button>
      </li>
    </ul>
  );
}

export default Menu;
