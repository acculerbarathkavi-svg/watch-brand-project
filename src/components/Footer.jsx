import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="lux-footer-gold">
      <div className="footer-overlay"></div>

      <div className="container footer-container">
        
        {/* Brand Section */}
        <div className="footer-section">
          <h3 className="footer-logo">LUXTIME</h3>
          <p className="footer-text">
            Precision-crafted luxury timepieces built for elegance, prestige, and timeless style.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h4 className="footer-title">Explore</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4 className="footer-title">Connect</h4>
          <div className="footer-social">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LUXTIME — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
