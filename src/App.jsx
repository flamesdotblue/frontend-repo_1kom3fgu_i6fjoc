import HeaderHero from "./components/HeaderHero";
import ProductGallery from "./components/ProductGallery";
import AboutResha from "./components/AboutResha";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderHero />
      <ProductGallery />
      <AboutResha />
      <Footer />
    </div>
  );
}

export default App;
