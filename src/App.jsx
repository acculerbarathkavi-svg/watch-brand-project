import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import About from "./components/About"
import ProductSection from './components/Product';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <ProductSection/>
      <Footer/>
    </>
  )
}

export default App
