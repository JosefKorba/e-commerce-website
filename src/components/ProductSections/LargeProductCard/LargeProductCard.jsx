import PropTypes from 'prop-types';
import Button from '../../Global/Button/Button';
import styles from './LargeProductCard.module.css'; 

const LargeProductCard = ({ title, description, image }) => {
 return (
    <div className={styles.largeProductCard}>
      <img src={image} alt={title} className={styles.productImage} /> 
      <h3 className={styles.productTitle}>{title}</h3> 
      <p className={styles.productDescription}>{description}</p> 
      <Button path="/product-details" color="darkOrange" ariaLabel="View Product Details">SEE PRODUCT</Button> 
    </div>
 );
};

LargeProductCard.propTypes = {
 title: PropTypes.string.isRequired,
 description: PropTypes.string,
 image: PropTypes.string.isRequired,
};

export default LargeProductCard;