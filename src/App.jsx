import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ProductSection from "./components/Product";
import Footer from "./components/Footer";
import Highlight from "./components/Highlight";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

import Loader from "./components/Loader";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fake loading time (2 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />; // Show loader first
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <Highlight />
      <About />
      <Benefits />
      <ProductSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
