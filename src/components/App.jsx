import { useState, useEffect } from 'react';
import { fetchPhotos } from 'services/pixabay-api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container, Picture } from './App.styled';
import Modal from './Modal';

const App = () => {
  const [search, setSearch] = useState('');
  const [currentImage, setCurrentImage] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setIsLoading(true);
    setIsButtonActive(false);

    fetchPhotos(search, activePage)
      .then(({ hits }) => {
        if (hits.length === 0) {
          setPhotos(hits);
          setIsLoading(false);
          setError("We didn't find anything. Try again");
          return;
        }

        setPhotos(prev => [...prev, ...hits]);
        setIsLoading(false);
        setIsButtonActive(true);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [search, activePage]);

  const handleSubmitForm = searchParam => {
    setActivePage(1);
    setPhotos([]);
    setError(null);
    setSearch(searchParam);
  };

  const openModal = data => {
    setCurrentImage(data);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmitForm} />
      <ImageGallery
        isButtonActive={isButtonActive}
        isLoading={isLoading}
        error={error}
        photos={photos}
        setActivePage={setActivePage}
        onOpenleModal={openModal}
      />
      {currentImage && (
        <Modal closeModal={closeModal}>
          <Picture src={currentImage.largeImageURL} alt={currentImage.tags} />
        </Modal>
      )}
    </Container>
  );
};

export default App;
