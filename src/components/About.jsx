import React from "react";
import { motion } from "framer-motion";
import "../assets/css/AboutSection.css";
import watchImg from "../assets/img/hero-img.jpg"; // use your actual image

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <section className="about-section py-5 text-white" id="about">
      <div className="container">
        <div className="row align-items-center">

          {/* Image Side */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={watchImg}
              alt="Luxury Watch"
              className="img-fluid rounded-4 shadow"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="col-lg-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="fw-bold display-6 text-gold mb-3">
              Timeless Elegance, Redefined
            </h2>
            <p className="lead text-light opacity-75 mb-4">
              LUXTIME crafts timepieces that blend precision engineering with timeless design.
              Each watch is a statement of sophistication — built for those who value both form and function.
            </p>

            <div className="row gy-3">
              <motion.div className="col-6" variants={fadeUp}>
                <h5 className="text-gold fw-bold">⚙️ Swiss Precision</h5>
                <p className="small opacity-75">
                  Crafted with meticulous attention for unmatched accuracy.
                </p>
              </motion.div>

              <motion.div className="col-6" variants={fadeUp}>
                <h5 className="text-gold fw-bold">💎 Premium Materials</h5>
                <p className="small opacity-75">
                  Made with sapphire glass and 316L stainless steel casing.
                </p>
              </motion.div>

              <motion.div className="col-6" variants={fadeUp}>
                <h5 className="text-gold fw-bold">🌊 Water Resistant</h5>
                <p className="small opacity-75">
                  Engineered to perform in every environment — elegance meets endurance.
                </p>
              </motion.div>

              <motion.div className="col-6" variants={fadeUp}>
                <h5 className="text-gold fw-bold">⌚ Limited Editions</h5>
                <p className="small opacity-75">
                  Each model is uniquely numbered for exclusive ownership.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
