import React, { useContext } from 'react';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';

function Menu() {
  const {
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
    allReviews.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
    setReviews(allReviews.slice(0, 2));
  };

  const toggleHelpful = () => {
    setHelpfulClicked(true);
    setNewestClicked(false);
    setRelevantClicked(false);
    const filteredHelpful = allReviews.filter((r) => r.helpfulYes > 0).sort((a, b) => b.helpfulYes - a.helpfulYes);
    setAllReviews(filteredHelpful);
    setReviews(filteredHelpful.slice(0, 2));
  };

  const toggleRelevant = () => {
    setRelevantClicked(true);
    setNewestClicked(false);
    setHelpfulClicked(false);
    const filteredRelevant = allReviews.filter((r) => r.verified > 0);
    setReviews(filteredRelevant.slice(0, 2));
  };

  return (
    <ul className={styles.menu}>
      <li className={newestClicked && styles.activeMenu}>
        <button type="button" onClick={toggleNewest} id={styles.menuBtn} className={newestClicked && styles.activeBtn}>NEWEST</button>
      </li>
      <li className={helpfulClicked && styles.activeMenu}>
        <button type="button" onClick={toggleHelpful} id={styles.menuBtn} className={helpfulClicked && styles.activeBtn}>HELPFUL</button>
      </li>
      <li className={relevantClicked && styles.activeMenu}>
        <button type="button" onClick={toggleRelevant} id={styles.menuBtn} className={relevantClicked && styles.activeBtn}>RELEVANT</button>
      </li>
    </ul>
  );
}

export default Menu;
