import React from "react";
import "../assets/css/Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          We're here to help you with any inquiries about our luxury timepieces.
        </p>

        <div className="contact-wrapper">

         
          {/* Left Side - Info */}
<div className="contact-info">
  <h3>Get in Touch</h3>
  <p>Feel free to reach out for support, product info, or custom watch requests.</p>

  <div className="info-item">
    <FaMapMarkerAlt className="icon" />
    <p>Coimbatore, India</p>
  </div>

  <div className="info-item">
    <FaPhoneAlt className="icon" />
    <p>+91 98765 43210</p>
  </div>

  <div className="info-item">
    <FaEnvelope className="icon" />
    <p>support@luxtime.com</p>
  </div>
</div>


          {/* Right Side - Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
