import PropTypes from 'prop-types';
import Button from '../../Global/Button/Button';
import styles from './SmallProductCard.module.css';

const SmallProductCard = ({ title, image }) => {
  return (
    <div className={styles.smallProductCard}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Button path="/product-details" color="darkOrange" ariaLabel="View Product Details">SEE PRODUCT</Button>
    </div>
  );
};

SmallProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SmallProductCard;