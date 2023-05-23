import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

const Button = ({ onHandleClickButtonLoad }) => {
  return <LoadButton onClick={onHandleClickButtonLoad}>Load more</LoadButton>;
};

Button.propTypes = {
  onHandleClickButtonLoad: PropTypes.func.isRequired,
};

export default Button;
