import React, { useContext }from 'react';
import styles from '../../../public/styles.css';
import ReviewContext from './ReviewContext';
import Star from './Star';

function Stars({ fill }) {
  const { averageStars } = useContext(ReviewContext);
  const avg = fill ? fill : averageStars;
  return (
    <span className={styles.starContainer}>
      <div className={styles.stars}>
        <Star fill={avg} />
        <Star fill={avg - 1}/>
        <Star fill={avg - 2}/>
        <Star fill={avg - 3}/>
        <Star fill={avg - 4}/>
      </div>
    </span>
  );
}

export default Stars;
