import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import data from "../../../data.json";
import Button from "../../Global/Button/Button";

const Hero = () => {
 const [product, setProduct] = useState("");

 useEffect(() => {
    // Retrieving a product from data.json
    const product = data.find((item) => item.id === 4);
    setProduct(product);
 }, []);

 // Dynamically generate the path to the product page
 const productPath = `/${product.category}/${product.slug}`;

 return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p>NEW PRODUCT</p>
        <h1 className={styles.heroTitle}>{product.name}</h1>
        <p className={styles.heroText}>{product.heroText}</p>
        <Button path={productPath} color="darkOrange" ariaLabel="View Product Details">SEE PRODUCT</Button>
      </div>
    </section>
 );
};

export default Hero;
