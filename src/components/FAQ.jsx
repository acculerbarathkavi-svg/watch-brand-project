import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/FAQ.css";

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
        "Our watches are made with high-grade stainless steel, sapphire crystal glass, and precision automatic movement. Each piece goes through strict quality checks to ensure durability, accuracy, and a premium finish.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide with real-time tracking and secure, protective packaging to ensure your watch arrives safely. All orders are handled with care and dispatched promptly for a smooth delivery experience.",
    },
    {
      question: "Do your watches come with warranty?",
      answer:
        "All our watches include a 2-year international warranty that covers any manufacturing defects, giving you confidence and peace of mind with every purchase.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we offer a 7-day easy return and exchange policy, as long as the product is unused and returned in its original packaging.",
    },
  ];

  return (
    <section className="faq-section py-5">
      <div className="container text-center">
        <h2 className="faq-title" data-aos="fade-up">FAQ</h2>
        <h3 className="faq-subtitle" data-aos="fade-up" data-aos-delay="150">
          About Our Watches
        </h3>

        <div className="faq-container mt-4">
          {faqData.map((item, index) => (
            <div
              className="faq-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}  // stagger animation
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
              </div>

              <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
