import React from "react";
import "../assets/css/ProductSection.css";
import watch1 from "../assets/img/watch1.jpg";
import watch2 from "../assets/img/watch2.jpg";
import watch3 from "../assets/img/watch3.jpg";

const ProductSection = () => {
  const products = [
    { id: 1, name: "Midnight Pulse", price: "₹56,890", img: watch1 },
    { id: 2, name: "Solstice Infinity", price: "₹88,069", img: watch2 },
    { id: 3, name: "Aurora Chrono", price: "₹24,224", img: watch3 },
  ];

  return (
    <section className="product-section py-5" id="price">
  <div className="container text-center">

    <h2
      className="section-title"
      style={{ paddingTop: "57px" }}
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      Trending Now
    </h2>

    <p
      className="section-subtitle"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      Discover our latest luxury timepieces designed for elegance, precision, and performance.
    </p>

    <div className="row justify-content-center mt-5">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="col-md-4 col-sm-6 mb-5"
          data-aos="zoom-in"
          data-aos-delay={index * 200} 
          data-aos-duration="1000"
        >
          <div className="product-card">
            <div className="product-img-wrapper">
              <img
                src={product.img}
                alt={product.name}
                className="product-img img-fluid"
              />
            </div>

            <h5 className="product-name mt-3">{product.name}</h5>
            <p className="product-price">{product.price}</p>
            <button className="product-btn">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProductSection;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// // Swiper styles
// import "swiper/css";

// const Product = () => {
//   return (
//     <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         slidesPerView={1}
//         spaceBetween={20}
//       >
//         <SwiperSlide>
//           <img src="/img/watch1.jpg" alt="watch1" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src="/img/watch2.jpg" alt="watch2" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src="/img/watch3.jpg" alt="watch3" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Product;
