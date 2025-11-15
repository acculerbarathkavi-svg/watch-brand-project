import React from "react";
import "../assets/css/Benefits.css";
import { FaShippingFast, FaShieldAlt, FaGem } from "react-icons/fa";
import { Margin } from "@mui/icons-material";

const Benefits = () => {
  return (
    <section className="benefits-section" id="Benefits">
  <h2
    className="benefits-title"
    style={{ paddingTop: "57px" }}
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    Why Choose Us
  </h2>

  <div className="benefits-container" data-aos="fade-up" data-aos-delay="200">
    
    {/* Card 1 */}
    <div
      className="benefit-card"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <FaShippingFast className="benefit-icon" />
      <h3 className="benefit-heading">Fast & Secure Delivery</h3>
      <p className="benefit-text">
        Swift, reliable, and carefully handled shipping.
      </p>
    </div>

    {/* Card 2 (Highlighted) */}
    <div
      className="benefit-card highlight-card"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-duration="1200"
    >
      <FaShieldAlt className="benefit-icon" />
      <h3 className="benefit-heading">5-Year Warranty</h3>
      <p className="benefit-text">
        Premium protection with lifetime service support.
      </p>
    </div>

    {/* Card 3 */}
    <div
      className="benefit-card"
      data-aos="zoom-in"
      data-aos-delay="600"
      data-aos-duration="1200"
    >
      <FaGem className="benefit-icon" />
      <h3 className="benefit-heading">Luxury Materials</h3>
      <p className="benefit-text">
        Crafted with sapphire crystal & premium metals.
      </p>
    </div>

  </div>
</section>

  );
};

export default Benefits;
