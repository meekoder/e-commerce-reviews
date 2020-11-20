import React, { useState, useContext } from 'react';
import ReviewContext from './ReviewContext';
import styles from '../../../public/styles.css';

function Menu() {
  const {
    newestClicked,
    setNewestClicked,
    helpfulClicked,
    setHelpfulClicked,
    relevantClicked,
    setRelevantClicked,
  } = useContext(ReviewContext);

  const toggleNewest = () => {
    setNewestClicked(true);
    setHelpfulClicked(false);
    setRelevantClicked(false);
  };

  const toggleHelpful = () => {
    setHelpfulClicked(true);
    setNewestClicked(false);
    setRelevantClicked(false);
  };

  const toggleRelevant = () => {
    setRelevantClicked(true);
    setNewestClicked(false);
    setHelpfulClicked(false);
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
