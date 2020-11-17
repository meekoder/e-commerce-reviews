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
      {props.recommended === 1 &&
          (
            <div className={styles.check}>
              <p className={styles.recommended}>
                <span>
                  <svg id={styles.checkmark} viewBox="0 0 19 19">
                    <title>checkmark</title>
                    <path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterLimit="10" d="M2.5 10.5l4 4 10-10" />
                  </svg>
                </span>
                I recommend this product
              </p>
            </div>
          )}
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
