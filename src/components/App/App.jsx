import React, { useState } from "react";
import fetchImages from "../../services/unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loadState, setLoadState] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (searchQuery) => {
    setPage(1);
    setLoadState(true);

    try {
      const data = await fetchImages(searchQuery, 1);
      setImages(data);
      setQuery(searchQuery);
      setLoadState(false);
    } catch (error) {
      setError("Error fetching images.");
      setLoadState(false);
    }
  };

  const loadMoreImages = async () => {
    setPage(page + 1);
    setLoadState(true);
    try {
      const data = await fetchImages(query, page + 1);
      setImages([...images, ...data]);
      setLoadState(false);
    } catch (error) {
      setError("Error fetching images.");
      setLoadState(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const openModal = (image) => {
    setModalIsOpen(true);
    setSelectedImage(image);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      {loadState ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onLoadMore={openModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onLoadMore={loadMoreImages} />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
