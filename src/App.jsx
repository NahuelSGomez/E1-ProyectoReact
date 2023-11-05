import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Featured } from "./components/Featured";
import { Products } from "./components/Products";

function App() {
    return (
      <>
      <NavBar />
      <Hero />
      <Categories />
      <Featured />
      <Products />
      <Footer />
      </>
    );
}

export default App;