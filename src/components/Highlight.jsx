import React from "react";
import "../assets/css/Highlight.css";
import highBg from "../assets/img/highlight-img.jpeg";
import heroImg from "../assets/img/hero-img.jpg";
import watchImg from "../assets/img/watch4.jpg";


import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WatchIcon from "@mui/icons-material/Watch";

import { Padding } from "@mui/icons-material";

const BGHero = () => {
    return (
        <>

            <section className="hero d-flex align-items-center text-white" id="about">
  <div className="container text-center text-lg-start">
    <div className="row align-items-center">

      {/* LEFT TEXT */}
      <div className="col-lg-6 col-md-12 hero-text pt-0">
        <h1 className="display-4 fw-bold mb-3">
          Timeless Elegance for Modern You
        </h1>

        <p className="lead mb-4">
          Discover craftsmanship and precision in every tick. Our watches
          redefine sophistication with enduring style and unmatched quality.
        </p>

        <button className="luxury-btn">Explore</button>
      </div>

      {/* RIGHT IMAGE */}
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


            {/* <section
                className="bg-hero-section"
                style={{ backgroundImage: `url(${highBg})` }}
            >
                <div className="bg-hero-overlay">
                    <div className="container">
                        <div className="content-box">
                            <h1 className="hero-title">Discover Timeless Luxury</h1>
                            <p className="hero-subtitle">
                                Precision engineering meets iconic craftsmanship.
                            </p>

                            <button className="hero-btn">Explore Collection</button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="container-fluid" >
                <div className="row">
                    <div className="col why-choose-section">
                        <div className="overlay">
                            <h2>Why Choose Us</h2>
                            <p className="sub-text">
                                Precision. Craftsmanship. Timeless Elegance.
                            </p>

                            <ul className="benefits">
                                <li>✔ Swiss-Inspired Precision Engineering</li>
                                <li>✔ Premium Sapphire Crystal Glass</li>
                                <li>✔ 5-Year Warranty & Lifetime Service Support</li>
                                <li>✔ Luxury Design Built for Everyday Wear</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col why-choose-section">
                        <div className="multi-img">
                            <img src={watchImg} alt="" className="high-img img-fluid"/>
                        </div>
                    </div>
                </div>

            </section> */}

        </>

    );
};

export default BGHero;
