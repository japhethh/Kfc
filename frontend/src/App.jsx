import MuiCarousel from "./components/content/Carousel";
import MenuHeader from "./components/content/MenuHeader";
import ExploreMenu from "./components/ExploreMenu,";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Nav />
        <MenuHeader />
      </div>
      <MuiCarousel />
      <ExploreMenu />
      <Footer />
    </div>
  );
};

export default App;
