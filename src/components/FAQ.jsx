import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/FAQ.css";

import watchImg from "../assets/img/about-img1.jpg"; // <-- your image

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What makes your watches premium?",
      answer:
        "Our watches are crafted with high-grade stainless steel, sapphire crystal glass, and precision automatic movement. Each piece undergoes rigorous quality testing.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide with real-time tracking and secure packaging to ensure your watch arrives safely.",
    },
    {
      question: "Do your watches come with warranty?",
      answer:
        "All our watches come with a 2-year international warranty covering manufacturing defects.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we offer a 7-day easy return and exchange policy, provided the product is unused and in original packaging.",
    },
  ];

  return (
    <section className="faq-section py-5">
      <div className="container">

        <div className="faq-header text-center">
          <h2 className="faq-title" data-aos="fade-up">FAQ</h2>
          <h3 className="faq-subtitle" data-aos="fade-up" data-aos-delay="150">
            About Our Watches
          </h3>
        </div>

        <div className="faq-content">
          
          {/* LEFT SIDE FAQ */}
          <div className="faq-left" data-aos="fade-right">
            {faqData.map((item, index) => (
              <div
                className="faq-item"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`faq-answer ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="faq-right" data-aos="fade-left" data-aos-delay="200">
            <img src={watchImg} alt="Luxury Watch" className="faq-image" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;
