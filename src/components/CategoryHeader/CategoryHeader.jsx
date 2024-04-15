import styles from "./CategoryHeader.module.css"
import PropTypes from 'prop-types';

const CategoryHeader = ({ categoryName }) => {
    return (
       <header className={styles.categoryBackground}>
         <h2 className={styles.categoryTitle}>{categoryName}</h2>
       </header>
    );
   };

   CategoryHeader.propTypes = {
    categoryName: PropTypes.string.isRequired,
  };

export default CategoryHeader