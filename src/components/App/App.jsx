import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageCard from "../ImageCard/ImageCard";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  return (
    <div className="container">
      <ErrorMessage />
      <ImageCard />
      <ImageGallery />
      <ImageModal />
      <Loader />
      <LoadMoreBtn />
      <SearchBar />
    </div>
  );
};

export default App;
