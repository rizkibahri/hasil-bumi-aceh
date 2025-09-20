import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Contact as ContactIcon } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-green-40">
      {/* Navbar muncul di atas */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Product Section */}
      <Products />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
