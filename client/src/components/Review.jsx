import React from 'react';

function Review(props) {
  return (
    <div>
      <div className='stars'>
        <p>{props.stars}</p>
        <p>{props.date}</p>
      </div>
      <p className='summary'>{props.summmary}</p>
      <p>{props.fullReview}</p>
      {props.recommended === 1 ? <p>I recommend this product</p> : null}
      {props.image ? <img src={props.image}/> : null}
      <div className='verifiedUser'>
        <h5>{props.user}</h5>
        {props.verified === 1 ? <p>- Verified Purchaser</p> : null}
      </div>
      <div className='helpful'>
        <p>Was this review helpful?</p>
        <p>{`Yes (${props.helpfulYes})`}</p>
        <p>{`No (${props.helpfulNo})`}</p>
      </div>
      <hr />
    </div>
  )
}

export default Review;
