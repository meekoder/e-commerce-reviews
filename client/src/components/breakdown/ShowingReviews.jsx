import React, { useContext } from 'react';
import ReviewContext from '../ReviewContext';
import styles from '../../../styles.css';

function ShowingReviews({ toggleFilter }) {
  const { selectedFilters } = useContext(ReviewContext);
  return (
    <div className={styles.showingReviews}>
      Showing Reviews:
      {selectedFilters.map((i) => (
        <div className={styles.filters} id={styles.selectedFilter}>
          <h4 className={styles.starFilter} onClick={() => { toggleFilter(i) }}>{`${i} STARS`}</h4>
        </div>
      ))}
    </div>
  );
}

export default ShowingReviews;
