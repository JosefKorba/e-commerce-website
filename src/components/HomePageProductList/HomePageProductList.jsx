import LargeProductCard from '../ProductSections/LargeProductCard/LargeProductCard';
import MediumProductCard from '../ProductSections/MediumProductCard/MediumProductCard';
import SmallProductCard from '../ProductSections/SmallProductCard/SmallProductCard';
import HomePageProductListConfig from '../../configs/HomePageProductListConfig';

const HomePageProductList = () => {
  const productCards = Object.values(HomePageProductListConfig).map(product => {
    switch (product.type) {
      case 'large':
        return <LargeProductCard key={product.title} {...product} />;
      case 'medium':
        return <MediumProductCard key={product.title} {...product} />;
      case 'small':
        return <SmallProductCard key={product.title} {...product} />;
      default:
        return null;
    }
  });

  return <div>{productCards}</div>;
};

export default HomePageProductList;