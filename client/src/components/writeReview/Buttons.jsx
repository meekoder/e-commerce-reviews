import React from 'react';
import WriteReview from './WriteReview';
import LoadMore from './LoadMore';
import styles from '../../../../public/styles.css';

function Buttons() {
  return (
    <div className={styles.buttons}>
      <LoadMore />
      <WriteReview />
    </div>
  );
}

export default Buttons;
