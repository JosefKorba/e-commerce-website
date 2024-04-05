import NavBar from "../components/Global/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import CategoryCard from "../components/Global/CategoryCard/CategoryCard";
import HomePageProductList from "../components/HomePageProductList/HomePageProductList";

const HomePage = () => {
 return (
    <div>
      <NavBar />
      <Hero />
      <CategoryCard />
      <HomePageProductList />
    </div>
 );
};

export default HomePage;