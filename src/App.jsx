import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import About from "./components/About"
import ProductSection from './components/Product';
import Footer from './components/Footer';
import Highlight from './components/Highlight';


function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <ProductSection/>
      <Highlight/>
      <Footer/>
    </>
  )
}

export default App
