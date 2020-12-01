import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BaseModal from './Modal';
import ReviewContext from './ReviewContext';

function ImageModal({ image }) {
  const { viewModal, setViewModal } = useContext(ReviewContext);
  return (
    <BaseModal
      show={viewModal}
      handleExit={() => setViewModal(false)}
    >
      <img src={image} alt="review" />
    </BaseModal>
  );
}

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
};
export default ImageModal;
