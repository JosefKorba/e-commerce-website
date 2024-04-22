
import ProductCard from '../ProductCard/ProductCard';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} productPath={`/product/${product.slug}`} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    categoryImage: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductList;
