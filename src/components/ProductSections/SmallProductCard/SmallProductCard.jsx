import PropTypes from 'prop-types';
import Button from '../../Global/Button/Button';
import styles from './SmallProductCard.module.css';
import data from '../../../configs/HomePageProductListConfig';

const SmallProductCard = ({ productId }) => {
  const product = data[`product${productId}`];

  const productPath = `/${product.category}/${product.slug}`;
  return (
    <article className={styles.smallProductCard}>
      <div className={styles.firstSmallCard}>
      <img className={styles.firstSmallCard} src={product.image} alt={product.title} />
      </div>
      <div className={styles.secondSmallCard}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <Button path={productPath} color="transparentColor" ariaLabel="View Product Details">SEE PRODUCT</Button>
      </div>
    </article>
  );
};

SmallProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default SmallProductCard;