import PropTypes from 'prop-types';
import Button from '../../../Global/Button/Button';
import styles from './LargeProductCard.module.css';
import data from '../../../../configs/HomePageProductListConfig';

const LargeProductCard = ({ productId }) => {
  const product = data[`product${productId}`];

  const productPath = `/${product.category}/${product.slug}`;
  return (
    <article className={styles.largeProductCard}>
      <div className={styles.productImageContainer}>
       <img src={product.image} alt={product.title} className={styles.productImage} />
      </div>
      <div className={styles.productInfoContainer}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <Button path={productPath} color="black" ariaLabel="View Product Details">SEE PRODUCT</Button>
      </div>
    </article>
  );
};

LargeProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default LargeProductCard;