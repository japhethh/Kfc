import MuiCarousel from "./components/content/Carousel";
import MenuHeader from "./components/content/MenuHeader";
import ExploreMenu from "./components/ExploreMenu,";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <MenuHeader />
      <MuiCarousel />
      <ExploreMenu />
    </div>
  );
};

export default App;
