import React from 'react';
import styles from '../../../public/styles.css';

function Review(props) {
  return (
    <div>
      <div className={styles.stars}>
        <p>{props.stars}</p>
        <p>{props.date}</p>
      </div>
      <p className={styles.summary}>{props.summmary}</p>
      <p>{props.fullReview}</p>
      {props.recommended === 1 && <p>I recommend this product</p>}
      {props.image && <img src={props.image}/>}
      <div className={styles.verifiedUser}>
        <h5>{props.user}</h5>
        {props.verified === 1 && <p>- Verified Purchaser</p>}
      </div>
      <div className={styles.helpful}>
        <p>Was this review helpful?</p>
        <p>{`Yes (${props.helpfulYes})`}</p>
        <p>{`No (${props.helpfulNo})`}</p>
      </div>
      <hr />
    </div>
  )
}

export default Review;
