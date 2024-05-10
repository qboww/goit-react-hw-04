import React from "react";

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image);
  };

  return (
    <div onClick={handleClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
