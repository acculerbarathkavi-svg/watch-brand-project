import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/Navbar.css";
import logoImg from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm px-4 py-3" style={{backgroundColor:"black" }}>
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center fw-bold fs-3 text-white" href="#">
          <img
            src={logoImg}
            alt="Shopping Bag"
            width="130"
            height="70"
            className="me-2"
          />
          
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#services">
                Products
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <div className="wrapper">
                <button className="button">
                  <span className="button-content">Buy Now</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
