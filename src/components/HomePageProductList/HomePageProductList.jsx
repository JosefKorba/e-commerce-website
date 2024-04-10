import LargeProductCard from '../ProductSections/LargeProductCard/LargeProductCard';
import MediumProductCard from '../ProductSections/MediumProductCard/MediumProductCard';
import SmallProductCard from '../ProductSections/SmallProductCard/SmallProductCard';
import HomePageProductListConfig from '../../configs/HomePageProductListConfig';
import styles from './HomePageProductList.module.css'; 

const HomePageProductList = () => {
 const productCards = Object.values(HomePageProductListConfig).map(product => {
    switch (product.type) {
      case 'large':
        return <LargeProductCard key={product.title} {...product} productId={product.id} className={styles.productCard} />;
      case 'medium':
        return <MediumProductCard key={product.title} productId={product.id} className={styles.productCard} />;
      case 'small':
        return <SmallProductCard key={product.title} productId={product.id} className={styles.productCard} />;
      default:
        return null;
    }
 });

 return <div className={styles.productListContainer}>{productCards}</div>;
};

export default HomePageProductList;