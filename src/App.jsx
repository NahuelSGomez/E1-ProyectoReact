import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { NavBar } from "./components/NavBar";
import { BottomNav } from "./components/BottomNav";
import { Footer } from "./components/Footer";


function App() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <BottomNav />
        <Footer />
      </div>
    );
}

export default App;