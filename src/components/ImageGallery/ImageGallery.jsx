import { Bars } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from 'components/Button';
import { List, TextError, ButtonWrapper } from './ImageGallery.styled';

const ImageGallery = ({
  setActivePage,
  photos,
  error,
  isLoading,
  isButtonActive,
  onOpenleModal,
}) => {
  const loader = (
    <Bars
      height="80"
      width="80"
      color="#4253b0"
      ariaLabel="bars-loading"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      visible={true}
    />
  );

  return (
    <>
      {error && <TextError>{error}</TextError>}

      <List>
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            setCurrentImage={onOpenleModal}
          />
        ))}
      </List>

      {isLoading && loader}

      {isButtonActive && (
        <ButtonWrapper>
          <Button
            onHandleClickButtonLoad={() => setActivePage(prev => prev + 1)}
          />
        </ButtonWrapper>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  error: PropTypes.string,
  isButtonActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setActivePage: PropTypes.func.isRequired,
  onOpenleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
