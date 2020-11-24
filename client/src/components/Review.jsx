import React, { useContext, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';
import Stars from './Stars';

function Review({ stars, summary, fullReview, recommended, image, helpfulYes, helpfulNo, date, user, verified }) {
  const { currentShoe } = useContext(ReviewContext);
  const [helpfulY, setHelpfulYes] = useState(helpfulYes);
  const [helpfulN, setHelpfulNo] = useState(helpfulNo);
  const [voteClicked, setVoteClicked] = useState(false);
  const reviewDate = new Date(date);
  const day = reviewDate.getDate();
  const year = reviewDate.getFullYear();
  const options = { month: 'long' };
  const month = new Intl.DateTimeFormat('en-US', options).format(reviewDate);

  const addHelpful = (username) => {
    setVoteClicked(true);
    axios
      .post(`/api/products/${currentShoe}/${username}/helpful`)
      .then(() => {
        setHelpfulYes(helpfulY + 1);
      })
      .catch((err) => console.log(err));
  };

  const addNotHelpful = (username) => {
    setVoteClicked(true);
    axios
      .post(`/api/products/${currentShoe}/${username}/nothelpful`)
      .then(() => {
        setHelpfulNo(helpfulN + 1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.review}>
      <div className={styles.stars}>
        <Stars fill={stars} />
        <p className={styles.date}>{`${month} ${day}, ${year}`}</p>
      </div>
      <h5 className={styles.summary}>{summary}</h5>
      <p className={styles.reviewText}>{fullReview}</p>
      {recommended === 1
          && (
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
      {image && <img src={image} alt="review" />}
      <div className={styles.verifiedUser}>
        <p className={styles.user}>{user}</p>
        {verified === 1 && <span className={styles.verified}>- Verified Purchaser</span>}
      </div>
      <div className={styles.helpful}>
        <div>Was this review helpful?</div>
        <div className={styles.voteAlign}>
          <span>
            <p className={styles.vote} onClick={!voteClicked ? () => addHelpful(user) : null}>Yes</p>
          </span>
          <span className={styles.voteCount}>{`(${helpfulY})`}</span>
        </div>
        <div className={styles.voteAlign}>
          <p className={styles.vote} onClick={!voteClicked ? () => addNotHelpful(user) : null}>No</p>
          <span className={styles.voteCount}>{`(${helpfulN})`}</span>
        </div>
      </div>
      {voteClicked ?
        (
          <div className={styles.voteConfirmation}>
            <span>Thank you! You have successfully submitted feedback for this review</span>
          </div>
        )
        : null}
    </div>
  );
}

export default Review;

Review.defaultProps = {
  image: null,
};

Review.propTypes = {
  stars: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  fullReview: PropTypes.string.isRequired,
  recommended: PropTypes.number.isRequired,
  image: PropTypes.string,
  helpfulYes: PropTypes.number.isRequired,
  helpfulNo: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  verified: PropTypes.number.isRequired,
};
