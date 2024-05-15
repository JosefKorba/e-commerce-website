import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GoBackButton from '../components/Global/GoBackButton/GoBackButton';
import Header from '../components/Global/Header/Header';
import ProductDetail from "../components/ProductDetailPage/ProductDetail/ProductDetail";
import Features from "../components/ProductDetailPage/Features/Features";
import Content from "../components/ProductDetailPage/Content/Content";
import ProductImage from "../components/ProductDetailPage/ProductImage/ProductImage";
import Recommendations from "../components/ProductDetailPage/Recommendations/Recommendations";
import CategoryCard from "../components/Global/CategoryCard/CategoryCard";
import BestAudioGearSection from "../components/Global/BestAudioGearSection/BestAudioGearSection";
import Footer from "../components/Global/Footer/Footer";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = useProductDetail(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <GoBackButton />
      <ProductDetail product={product} />
      <Features features={product.features} />
      <Content items={product.includes} />
      <ProductImage productSlug={productId} />
      <Recommendations recommendations={product.recommendations} />
      <CategoryCard />
      <BestAudioGearSection
        imageSrc="../src/assets/images/shared/desktop/image-best-gear.jpg"
        title="Bringing you the best audio gear"
        description="We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
      />
      <Footer />
    </>
  );
};

export default ProductDetailPage;