import React, { useContext } from 'react';
import BaseModal from './Modal';
import ReviewContext from './ReviewContext';
import styles from '../../styles.css';

function ImageModal({ image }) {
  const { viewModal, setViewModal } = useContext(ReviewContext);
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
