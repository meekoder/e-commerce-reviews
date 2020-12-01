import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  right: -17px;
  top: -17px;
  background-color: white;
  border: 1px solid black;
  height: 36px;
  width: 36px;
  cursor: pointer;
  &:active {
    transform: scale(.95, .95);
  }
  transition: transform .1s;
`;

function ExitButton({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      <svg width="1.75rem" height="1.75rem" viewBox="0 0 14 24">
        <path d="M13 6l-6 6 6 6M1 6l6 6-6 6" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" />
      </svg>
    </Button>
  );
}

export default ExitButton;

ExitButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
