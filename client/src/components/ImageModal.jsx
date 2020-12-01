import React from 'react';
import BaseModal from './Modal';

function ImageModal({ handleModal, viewModal, setViewModal, image }) {
  return (
    <BaseModal
      show={viewModal}
      handleExit={() => setViewModal(false)}
      wide
    >
      <img className={styles.reviewImg} src={image} onClick={handleModal} alt="review" />
    </BaseModal>
  );
}

export default ImageModal;
