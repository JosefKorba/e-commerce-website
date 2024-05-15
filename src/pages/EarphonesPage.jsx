import { useEffect } from "react";
import Header from "../components/Global/Header/Header";
import BestAudioGearSection from "../components/Global/BestAudioGearSection/BestAudioGearSection";
import CategoryCard from "../components/Global/CategoryCard/CategoryCard";
import Footer from "../components/Global/Footer/Footer";
import CategoryHeader from "../components/Global/CategoryHeader/CategoryHeader";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductCategoryPages/ProductList/ProductList";

const EarphonesPage = () => {
  const products = useProducts("earphones");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <CategoryHeader categoryName="EARPHONES" />
      <ProductList products={products} />
      <CategoryCard />
      <BestAudioGearSection
        imageSrc="src\assets\images\shared\desktop\image-best-gear.jpg"
        title="Bringing you the best audio gear"
        description="We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
      />
      <Footer />
    </>
  );
};

export default EarphonesPage;
