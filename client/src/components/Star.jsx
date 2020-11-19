import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StarContainer = styled.div`
  display: grid;
`;

const SingleStar = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: ${(props) => props.width};
  overflow: hidden;
`;

function Star({ fill }) {
  let percentage;
  if (fill >= 1) {
    percentage = '100%';
  } else if (fill < 0) {
    percentage = '0%';
  } else {
    percentage = `${fill * 100}%`;
  }

  return (
    <StarContainer>
      <SingleStar width={percentage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1rem"
          height="1rem"
        >
          <path
            fill="currentColor"
            stroke="0"
            d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
          />
        </svg>
      </SingleStar>
      <SingleStar width="100%">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1rem"
          height="1rem"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
          />
        </svg>
      </SingleStar>
    </StarContainer>
  );
}

export default Star;

Star.defaultProps = {
  fill: '100%',
};

Star.propTypes = {
  fill: PropTypes.number,
};
