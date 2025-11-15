import React from "react";
import "../assets/css/Testimonials.css";

const testimonials = [
  {
    text: "The craftsmanship is outstanding. My watch looks and feels premium—absolutely worth it.",
    name: "James Carter",
  },
  {
    text: "Amazing build quality and elegant design. Customer support was extremely helpful.",
    name: "Arjun Mehta",
  },
  {
    text: "I love the precision and the luxury feel. It elevates every outfit I wear.",
    name: "Sophia Reynolds",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">TESTIMONIALS</h2>

      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <span className="quote-icon">“</span>

            <p className="testimonial-text">{item.text}</p>

            <h4 className="testimonial-name">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
