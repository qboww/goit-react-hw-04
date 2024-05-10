import React from "react";

const LoadMoreBtn = ({ onLoadMore }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onLoadMore();
  }

  return <button onClick={handleClick}>Load more</button>;
};

export default LoadMoreBtn;
