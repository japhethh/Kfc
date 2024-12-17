import MenuHeader from "./components/content/MenuHeader";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollTabs from "./components/OurMenu";
const App = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Nav />
        <MenuHeader />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ourMenu" element={<ScrollTabs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
