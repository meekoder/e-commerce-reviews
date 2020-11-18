import React from 'react';
import styles from '../../../public/styles.css';
import Star from './Star';

function Stars() {
  return (
    <span className={styles.starContainer}>
      <div className={styles.stars}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </span>
  );
}

export default Stars;
