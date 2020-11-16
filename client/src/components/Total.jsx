import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Total(props) {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/shoes/${props.id}`)
      .then((res) => setReviewCount(res.data[0].reviews.length))
      .catch((err) => console.log(err));
  });

  return (
    <h1>{reviewCount} Reviews</h1>
  );
}

export default Total;
