import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExitButton from './ExitBtn';

const Background = styled.div`
  display: flex; /*${(props) => (props.show ? 'flex' : 'none')};*/
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  z-index: 200;
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.2s;
  z-index: -1;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: ${(props) => (props.wide ? '72%' : '50%')};
  max-width: 1200px;
  max-height: 92vh;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.45s;
  transition-delay: 0.1s;
  z-index: 200;
`;

const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

function BaseModal({ show, handleExit, children }) {
  // eslint-disable-next-line no-unused-expressions
  show && (document.body.style.overflow = 'hidden');
  function handleClick() {
    // eslint-disable-next-line no-unused-expressions
    document.body.style.overflow = '';
    handleExit();
  }
  return (
    <Background show={show}>
      <ModalContent show={show}>
        <ModalContentWrapper>
          {children}
        </ModalContentWrapper>
        <ExitButton handleClick={handleClick} />
      </ModalContent>
      <ClickableBackground show={show} onClick={handleClick} />
    </Background>
  );
}

BaseModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleExit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseModal;
