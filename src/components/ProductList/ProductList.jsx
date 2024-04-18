import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css'; 
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
 return (
     <div className={styles.productList}>
       {products.map((product) => (
         <ProductCard key={product.id} product={product} screenSize="desktop" productPath={`/product/${product.slug}`} /> 
       ))}
     </div>
 );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
       PropTypes.shape({
         image: PropTypes.object.isRequired,
         name: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
       })
    ).isRequired,
   };

export default ProductList;