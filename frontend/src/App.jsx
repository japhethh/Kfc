import MenuHeader from "./components/content/MenuHeader";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Nav />
        <MenuHeader />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
