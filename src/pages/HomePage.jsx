
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import HomePageProductList from "../components/HomePageProductList/HomePageProductList"; 
import data from '../data.json'; 

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <CategoryCard />
      <HomePageProductList products={data} /> 
    </div>
  );
};

export default HomePage;
