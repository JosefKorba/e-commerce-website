import { useState, useEffect } from 'react';
import productsData from '../data.json';

const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log(productId);
    const foundProduct = productsData.find(product => product.slug === productId);
    console.log(foundProduct);
    setProduct(foundProduct);
  }, [productId]);

  return product;
};

export default useProductDetail;