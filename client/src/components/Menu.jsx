import React, { useContext } from 'react';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';

function Menu() {
  const {
    setLoadMore,
    menuClicked,
    setMenuClicked,
  } = useContext(ReviewContext);

  const toggleNewest = () => {
    setMenuClicked({ newest: true });
    setLoadMore(2);
  };

  const toggleHelpful = () => {
    setMenuClicked({ helpful: true });
    setLoadMore(2);
  };

  const toggleRelevant = () => {
    setMenuClicked({ relevant: true });
    setLoadMore(2);
  };

  return (
    <ul className={styles.menu}>
      <li className={styles.menuBorder} id={menuClicked.newest && styles.activeMenu}>
        <button type="button" onClick={toggleNewest} className={styles.menuBtn} id={menuClicked.newest && styles.activeBtn}>NEWEST</button>
      </li>
      <li className={styles.menuBorder} id={menuClicked.helpful && styles.activeMenu}>
        <button type="button" onClick={toggleHelpful} className={styles.menuBtn} id={menuClicked.helpful && styles.activeBtn}>HELPFUL</button>
      </li>
      <li className={styles.menuBorder} id={menuClicked.relevant && styles.activeMenu}>
        <button type="button" onClick={toggleRelevant} className={styles.menuBtn} id={menuClicked.relevant && styles.activeBtn}>RELEVANT</button>
      </li>
    </ul>
  );
}

export default Menu;
