import "./App.css";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar/MenuBar";
import Description from "./components/Description";
import NavBar from "./components/NavBar";
import Recommend from "./components/Recommend/RecommendOfTheDay";
import Categories from "./components/Categores";
import FlashSale from "./components/FlashSale/FlashSale";
import ShopMall from "./components/ShopMall/ShopMall";
import BestOfWeek from "./components/BestOfWeek/BestOfWeek";
import PromotionLayout from "./components/PromotionAds/PromotionLayout";
function App() {
  return (
    <div className="bg-Light-gray">
      <NavBar />
      <PromotionLayout />
      <MenuBar />
      <Categories />
      <FlashSale />
      <ShopMall />
      <BestOfWeek />
      <Recommend />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
