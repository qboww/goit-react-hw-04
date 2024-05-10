import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      setLoadState(true);
      try {
        const data = await fetchImages(query, page);
        if (page === 1) {
          setImages(data);
        } else {
          setImages([...images, ...data]);
        }
        setLoadState(false);
      } catch (error) {
        setError("Error fetching images.");
        setLoadState(false);
      }
    };

    if (query !== "") {
      fetchData();
    }
  }, [query, page]);

  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage(page + 1);
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
      <ImageGallery images={images} onLoadMore={openModal} />
      {images.length > 0 && <LoadMoreBtn onLoadMore={loadMoreImages} />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      )}
      {loadState && <Loader />}
    </div>
  );
};

export default App;
