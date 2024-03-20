import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import data from "../../data.json";


const Hero = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    // Retrieving a product from data.json
    const product = data.find(item => item.id === 4);
    setProduct(product);
  }, []);

  return (
    <section className={styles.heroContainer}>
      <article className={styles.heroText} >
        <p>New Product</p>
        <h1>{product.name}</h1>
        <p>{product.heroText}</p>
        <button>SEE PRODUCT</button>
      </article>
    </section>
  );
};

export default Hero;
