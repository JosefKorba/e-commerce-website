import { useState, useEffect, useCallback } from "react";
import styles from './ProductDetail.module.css';
import PropTypes from 'prop-types';
import { useCart } from '../../Cart/CartContext/CartContext';


const getScreenSize = () => {
    if (window.innerWidth <= 600) return "mobile";
    if (window.innerWidth <= 900) return "tablet";
    return "desktop";
};

const ProductDetail = ({ product }) => {
    const [screenSize, setScreenSize] = useState(getScreenSize());
    const [count, setCount] = useState(1);
    const { addToCart } = useCart();  

    const handleResize = useCallback(() => {
        setScreenSize(getScreenSize());
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: count });
    };

    if (!product) {
        return <div>Loading product details...</div>;
    }

    const { categoryImage, name, description, price } = product;
    const imageSrc = categoryImage[screenSize];
    
    return (
        <div className={styles.productCard}>
            <img src={imageSrc} alt={name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h2 className={styles.productTitle}>{name}</h2>
                <p className={styles.productDescription}>{description}</p>
                <p className={styles.productPrice}>${price}</p>
                <div className={styles.counterWrapper}>
                    <button onClick={() => setCount(Math.max(count - 1, 1))}>-</button>
                    <span>{count}</span>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    );
};

ProductDetail.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categoryImage: PropTypes.object.isRequired,
        price: PropTypes.number.isRequired,
    })
};

export default ProductDetail;