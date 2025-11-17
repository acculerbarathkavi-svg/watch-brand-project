import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import About from "./components/About"
import ProductSection from './components/Product';
import Footer from './components/Footer';
import Highlight from './components/Highlight';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Highlight/>
      <About/>
      <Benefits/>
      <ProductSection/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
