import { useState, useEffect } from 'react';
import productsData from '../data.json';

const useProducts = (category) => {
 const [products, setProducts] = useState([]);

 useEffect(() => {
    const filteredProducts = productsData.filter(product => product.category === category);
    setProducts(filteredProducts);
 }, [category]);

 return products;
};

export default useProducts;