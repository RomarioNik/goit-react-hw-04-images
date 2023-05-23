import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BackDrop, ModalStyled, Button, IconClose } from './Modal.styled';

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.addEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <BackDrop onClick={handleBackdropClick}>
      <ModalStyled>
        <Button type="button" onClick={closeModal} aria-label="Button close">
          <IconClose />
        </Button>
        {children}
      </ModalStyled>
    </BackDrop>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Modal;
