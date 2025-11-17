import React from "react";
import { motion } from "framer-motion";
import "../assets/css/About.css";
import aboutImg from "../assets/img/about-img.jpg"; 

const AboutSection = () => {
  return (
    <section className="about-modern text-white" id="products">
      <div className="container text-center" >

        {/* Heading */}
        <motion.h2
          className="display-4 fw-bold text-gold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="divider mx-auto mb-3" data-aos="fade-up"></div>
          Precision Meets Perfection
        </motion.h2>


        {/* Subtitle */}
        <motion.p
          className="lead text-light mb-5 w-75 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          LUXTIME is more than a timepiece — it's a legacy.  
          Crafted with Swiss precision, each design captures timeless elegance and modern engineering.
        </motion.p>

        {/* Image */}
        <motion.div
          className="image-wrapper mx-auto mb-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={aboutImg} alt="Luxury Watch" className="  hero-watch" />
        </motion.div>

        {/* Feature Highlights */}
        <div className="row justify-content-center">
          {[
            { title: "Swiss Movement", text: "Every second engineered for accuracy." },
            { title: "Premium Craftsmanship", text: "Built with the world’s finest materials." },
            { title: "Luxury Design", text: "Minimalism meets modern luxury aesthetics." },
          ].map((feature, index) => (
            <motion.div
              className="col-md-3 col-10 feature"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="divider mx-auto mb-3"></div>
              <h5 className="text-gold fw-semibold">{feature.title}</h5>
              <p className="text-light opacity-75">{feature.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
