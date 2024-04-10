import PropTypes from 'prop-types';
import Button from '../../Global/Button/Button';
import styles from './MediumProductCard.module.css';
import data from '../../../configs/HomePageProductListConfig';

const MediumProductCard = ({ productId }) => {
  const product = data[`product${productId}`];

  const productPath = `/${product.category}/${product.slug}`;
  return (
    <article className={styles.mediumProductCard}>
      <img className={styles.productImage} src={product.image} alt={product.title} />
      <div className={styles.productTitleCard}>
        <h3 className={styles.productTitle} >{product.title}</h3>
        <Button path={productPath} color="transparentColor" ariaLabel="View Product Details">SEE PRODUCT</Button>
      </div>
    </article>
  );
};

MediumProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default MediumProductCard;