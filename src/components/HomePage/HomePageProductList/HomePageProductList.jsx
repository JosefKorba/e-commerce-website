import { useState } from "react";
import LargeProductCard from "../ProductSections/LargeProductCard/LargeProductCard";
import MediumProductCard from "../ProductSections/MediumProductCard/MediumProductCard";
import SmallProductCard from "../ProductSections/SmallProductCard/SmallProductCard";
import HomePageProductListConfig from "../../../configs/HomePageProductListConfig";
import styles from "./HomePageProductList.module.css";

const HomePageProductList = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (id) => {
    setSelectedProductId(id);
  };

  const productCards = Object.values(HomePageProductListConfig).map(
    (product) => {
      if (selectedProductId === product.id) {
        return (
          <div key={product.id} className={styles.productDetails}>
            <h1>{product.title}</h1>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <p>{product.description}</p>
          </div>
        );
      }

      switch (product.type) {
        case "large":
          return (
            <LargeProductCard
              key={product.title}
              {...product}
              productId={product.id}
              className={styles.productCard}
              onClick={() => handleProductClick(product.id)}
            />
          );
        case "medium":
          return (
            <MediumProductCard
              key={product.title}
              productId={product.id}
              className={styles.productCard}
              onClick={() => handleProductClick(product.id)}
            />
          );
        case "small":
          return (
            <SmallProductCard
              key={product.title}
              productId={product.id}
              className={styles.productCard}
              onClick={() => handleProductClick(product.id)}
            />
          );
        default:
          return null;
      }
    }
  );

  return <div className={styles.productListContainer}>{productCards}</div>;
};

export default HomePageProductList;
