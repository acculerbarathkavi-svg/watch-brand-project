import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import About from "./components/About"
import ProductSection from './components/Product';
import Footer from './components/Footer';
import Highlight from './components/Highlight';
import Benefits from './components/Benefits';


function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Highlight/>
      <Benefits/>
      <ProductSection/>
      <Footer/>
    </>
  )
}

export default App
