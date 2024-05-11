import React from "react";
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, closeModal, image }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      overlayClassName={css.Overlay}
      className={css.Modal}
    >
      <div className={css.modalContent}>
        
        {image && (
          <img
            src={image.urls.regular}
            alt="Selected"
            className={css.imgContainer}
          />
        )}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
