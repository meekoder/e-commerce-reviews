import React, { useContext } from 'react';
import ReviewContext from '../ReviewContext';
import styles from '../../../styles.css';

function ShowingReviews({ toggleFilter }) {
  const { selectedFilters } = useContext(ReviewContext);
  return (
    <div className={styles.showingReviews}>
      Showing Reviews:
      {[1, 2, 3, 4, 5].map((i) => (
        selectedFilters.includes(i)
          ? (
            <div className={styles.filters} id={styles.selectedFilter}>
              <h4 className={styles.starFilter} onClick={() => { toggleFilter(i) }}>{`${i} STARS`}</h4>
            </div>
          )
          : null
      ))}
    </div>
  );
}

export default ShowingReviews;
