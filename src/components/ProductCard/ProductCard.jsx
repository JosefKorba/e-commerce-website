import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "../Global/Button/Button";
import styles from "./ProductCard.module.css";

const getScreenSize = () => {
    if (window.innerWidth <= 600) return "mobile";
    if (window.innerWidth <= 900) return "tablet";
    return "desktop";
};

const ProductCard = ({ product, productPath, index }) => {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    const handleResize = useCallback(() => {
        setScreenSize(getScreenSize());
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const imageSrc = product.categoryImage[screenSize];
    const cardClass = index % 2 === 0 ? styles.productCard : `${styles.productCard} ${styles.reverse}`;
    console.log(imageSrc);
    return (
        <div className={cardClass}>
            <img src={imageSrc} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h2 className={styles.productTitle}>{product.name}</h2>
                <p className={styles.productDescription}>{product.description}</p>
                <Button path={productPath} color="darkOrange" ariaLabel="View Product Details" >
                    SEE PRODUCT
                </Button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        categoryImage: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    productPath: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default ProductCard;
