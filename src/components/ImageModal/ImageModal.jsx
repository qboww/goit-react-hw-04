import React from "react";
import ReactModal from "react-modal";
import css from './ImageModal.module.css'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "16",
  },
};

const ImageModal = ({ isOpen, closeModal, image }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <img src={image.urls.regular} alt="Selected" className={css.imgContainer} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
