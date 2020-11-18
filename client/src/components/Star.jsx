import React from 'react';

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
    >
      <path
        className="gl-star-rating__fill"
        fill="currentColor"
        stroke="0"
        d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
      />
    </svg>
  );
}

export default Star;
