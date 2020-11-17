import React from 'react';
import styles from '../../../public/styles.css';

function Review(props) {
  return (
    <div className={styles.review}>
      <div className={styles.stars}>
        <p>{props.stars}</p>
        <p className={styles.date}>{props.date}</p>
      </div>
      <h5 className={styles.summary}>{props.summary}</h5>
      <p className={styles.reviewText}>{props.fullReview}</p>
      {props.recommended === 1 && <p className={styles.recommended}>I recommend this product</p>}
      {props.image && <img src={props.image}/>}
      <div className={styles.verifiedUser}>
        <span className={styles.user}>{props.user}</span>
        {props.verified === 1 && <p>- Verified Purchaser</p>}
      </div>
      <div className={styles.helpful}>
        <p>Was this review helpful?</p>
        <div className={styles.voteAlign}>
          <p className={styles.vote}>Yes</p>
          <span className={styles.voteCount}>{`(${props.helpfulYes})`}</span>
        </div>
        <div className={styles.voteAlign}>
          <p className={styles.vote}>No</p>
          <span className={styles.voteCount}>{`(${props.helpfulNo})`}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
