import React, { useContext } from 'react';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';

function Menu() {
  const {
    setLoadMore,
    newestClicked,
    setNewestClicked,
    helpfulClicked,
    setHelpfulClicked,
    relevantClicked,
    setRelevantClicked,
    setReviews,
    setAllReviews,
    allReviews,
  } = useContext(ReviewContext);

  const toggleNewest = () => {
    setNewestClicked(true);
    setHelpfulClicked(false);
    setRelevantClicked(false);
    setLoadMore(2);
  };

  const toggleHelpful = () => {
    setHelpfulClicked(true);
    setNewestClicked(false);
    setRelevantClicked(false);
    setLoadMore(2);
  };

  const toggleRelevant = () => {
    setRelevantClicked(true);
    setNewestClicked(false);
    setHelpfulClicked(false);
    setLoadMore(2);
  };

  return (
    <ul className={styles.menu}>
      <li id={styles.menuBorder} className={newestClicked && styles.activeMenu}>
        <button type="button" onClick={toggleNewest} className={styles.menuBtn} id={newestClicked && styles.activeBtn}>NEWEST</button>
      </li>
      <li id={styles.menuBorder} className={helpfulClicked && styles.activeMenu}>
        <button type="button" onClick={toggleHelpful} className={styles.menuBtn} id={helpfulClicked && styles.activeBtn}>HELPFUL</button>
      </li>
      <li id={styles.menuBorder} className={relevantClicked && styles.activeMenu}>
        <button type="button" onClick={toggleRelevant} className={styles.menuBtn} id={relevantClicked && styles.activeBtn}>RELEVANT</button>
      </li>
    </ul>
  );
}

export default Menu;
