import { useEffect } from 'react';
import Header from "../components/Global/Header/Header";
import Hero from "../components/HomePage/Hero/Hero";
import CategoryCard from "../components/Global/CategoryCard/CategoryCard";
import HomePageProductList from "../components/HomePage/HomePageProductList/HomePageProductList";
import BestAudioGearSection from "../components/Global/BestAudioGearSection/BestAudioGearSection";
import Footer from "../components/Global/Footer/Footer";

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
 
  return (
    <>
      <Header />
      <Hero />
      <CategoryCard />
      <HomePageProductList />
      <BestAudioGearSection
        imageSrc="/images/shared/desktop/image-best-gear.jpg"
        title="Bringing you the best audio gear"
        description="We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
      />
      <Footer />
    </>
  );
};

export default HomePage;
