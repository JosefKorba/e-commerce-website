import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.css";
import { categories } from "../../../configs/CategoryCardConfig";

const CategoryCard = () => {
  return (
    <section className={styles.categorySection}>
      {categories.map((category) => (
        <Link to={category.link} key={category.name}>
          <article className={styles.categoryCard}>
            <img
              src={category.image}
              alt={category.name}
              className={styles.categoryImage}
            />
            <h6 className={styles.categoryName}>{category.name}</h6>
            <p className={styles.shopText}>SHOP&gt;</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default CategoryCard;
