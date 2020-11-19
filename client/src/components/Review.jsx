import React from 'react';
import styles from '../../../public/styles.css';
import Stars from './Stars';

function Review(props) {
  const reviewDate = new Date(props.date);
  const options = { month: 'long' };
  const month = new Intl.DateTimeFormat('en-US', options).format(reviewDate);
  const day = reviewDate.getDay();
  const year = reviewDate.getFullYear();

  return (
    <div className={styles.review}>
      <div className={styles.stars}>
        <Stars fill={props.stars} />
        {/* <p>{props.stars}</p> */}
        <p className={styles.date}>{`${month} ${day}, ${year}`}</p>
      </div>
      <h5 className={styles.summary}>{props.summary}</h5>
      <p className={styles.reviewText}>{props.fullReview}</p>
      {props.recommended === 1 &&
          (
            <div>
              <p className={styles.recommended}>
                <span>
                  <svg id={styles.checkmark} viewBox="0 0 19 19">
                    <title>checkmark</title>
                    <path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M2.5 10.5l4 4 10-10" />
                  </svg>
                </span>
                I recommend this product
              </p>
            </div>
          )}
      {props.image && <img src={props.image}/>}
      <div className={styles.verifiedUser}>
        <p className={styles.user}>{props.user}</p>
        {props.verified === 1 && <span className={styles.verified}>- Verified Purchaser</span>}
      </div>
      <div className={styles.helpful}>
        <div>Was this review helpful?</div>
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
