import React from "react";
import css from "./ImageCard.module.css"

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image);
  };

  return (
    <div onClick={handleClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.imageContainer}
      />
    </div>
  );
};

export default ImageCard;
