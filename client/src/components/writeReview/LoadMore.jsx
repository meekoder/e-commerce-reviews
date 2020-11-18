import React from 'react';
import BlackArrow from './BlackArrow';
import styles from '../../../../public/styles.css';

function LoadMore() {
  return (
    <div className={styles.loadMoreBtn}>
      <div className={styles.wrapper}>
        <span className={styles.loadMoreText}>LOAD MORE</span>
        <BlackArrow />
      </div>
    </div>
  );
}

export default LoadMore;
