import React from "react";
import "../assets/css/HeroSection.css";
import heroImg from "../assets/img/hero-img.jpg"; // use your uploaded image path

const HeroSection = () => {
  return (
    <section className="hero d-flex align-items-center text-white" id="home">
      <div className="container text-center text-lg-start">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 hero-text">
            <h1 className="display-4 fw-bold mb-3">
              Timeless Elegance for Modern You
            </h1>
            <p className="lead mb-4">
              Discover craftsmanship and precision in every tick. Our watches
              redefine sophistication with enduring style and unmatched quality.
            </p>
            <button className="btn btn-hero">Explore Collection</button>
          </div>
          <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
            <img
              src={heroImg}
              alt="Luxury Watch"
              className="img-fluid hero-watch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
