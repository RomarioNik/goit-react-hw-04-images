import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  setCurrentImage,
}) => {
  return (
    <ListItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => setCurrentImage({ largeImageURL, tags })}
      />
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
