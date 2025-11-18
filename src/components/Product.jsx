// import React from "react";
// import "../assets/css/ProductSection.css";
// import watch1 from "../assets/img/watch1.jpg";
// import watch2 from "../assets/img/watch2.jpg";
// import watch3 from "../assets/img/watch3.jpg";

// const ProductSection = () => {
//   const products = [
//     { id: 1, name: "Midnight Pulse", price: "₹56,890", img: watch1 },
//     { id: 2, name: "Solstice Infinity", price: "₹88,069", img: watch2 },
//     { id: 3, name: "Aurora Chrono", price: "₹24,224", img: watch3 },
//   ];

//   return (
//     <section className="product-section py-5" id="price">
//   <div className="container text-center">

//     <h2
//       className="section-title"
//       style={{ paddingTop: "57px" }}
//       data-aos="fade-up"
//       data-aos-duration="1200"
//     >
//       Trending Now
//     </h2>

//     <p
//       className="section-subtitle"
//       data-aos="fade-up"
//       data-aos-delay="200"
//       data-aos-duration="1200"
//     >
//       Discover our latest luxury timepieces designed for elegance, precision, and performance.
//     </p>

//     <div className="row justify-content-center mt-5">
//       {products.map((product, index) => (
//         <div
//           key={product.id}
//           className="col-md-4 col-sm-6 mb-5"
//           data-aos="zoom-in"
//           data-aos-delay={index * 200} 
//           data-aos-duration="1000"
//         >
//           <div className="product-card">
//             <div className="product-img-wrapper">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="product-img img-fluid"
//               />
//             </div>

//             <h5 className="product-name mt-3">{product.name}</h5>
//             <p className="product-price">{product.price}</p>
//             <button className="product-btn">Add To Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// };

// export default ProductSection;


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


// import React from "react";
// import "../assets/css/ProductSection.css";
// import watch1 from "../assets/img/watch1.jpg";
// import watch2 from "../assets/img/watch2.jpg";
// import watch3 from "../assets/img/watch3.jpg";
// import watch4 from "../assets/img/watch4.jpg";
// import watch5 from "../assets/img/watch5.jpg";
// import watch6 from "../assets/img/watch6.jpg";

// const ProductSection = () => {
//   return (
//     <section className="product-section py-5" id="price">
//       <div className="container text-center">
//         <h2 className="section-title">Trending Now</h2>

//         <p className="section-subtitle">
//           Discover our latest luxury timepieces designed for elegance and precision.
//         </p>

//         {/* Bootstrap Carousel */}
//         <div id="watchCarousel" className="carousel slide" data-bs-ride="carousel">

//           <div className="carousel-inner">

//             {/* Slide 1 */}
//             <div className="carousel-item active">
//               <div className="card-wrapper d-flex justify-content-center gap-4">

//                 <div className="product-card">
//                   <img src={watch1} className="card-img-top" alt="watch" />
//                   <h5 className="product-name">Midnight Pulse</h5>
//                   <p className="product-price">₹56,890</p>
//                 </div>

//                 <div className="product-card">
//                   <img src={watch2} className="card-img-top" alt="watch" />
//                   <h5 className="product-name">Solstice Infinity</h5>
//                   <p className="product-price">₹88,069</p>
//                 </div>

//                 <div className="product-card">
//                   <img src={watch3} className="card-img-top" alt="watch" />
//                   <h5 className="product-name">Aurora Chrono</h5>
//                   <p className="product-price">₹24,224</p>
//                 </div>

//               </div>
//             </div>

//             {/* Slide 2 */}
//             <div className="carousel-item">
//               <div className="card-wrapper d-flex justify-content-center gap-4">

//                 <div className="product-card">
//                   <img src={watch4} className="card-img-top" alt="watch" />
//                   <h5 className="product-name">Royal Eclipse</h5>
//                   <p className="product-price">₹76,499</p>
//                 </div>

//                 <div className="product-card">
//                   <img src={watch5} className="card-img-top" alt="watch" />
//                   <h5 className="product-name">Velvet Noir</h5>
//                   <p className="product-price">₹44,390</p>
//                 </div>

//                 <div className="product-card">
//                   <img src={watch6} className="card-img-top" alt="watch" />
//                   <h5 className="product-name">Titanium Spectre</h5>
//                   <p className="product-price">₹92,150</p>
//                 </div>

//               </div>
//             </div>

//           </div>

//           {/* Buttons */}
//           <button className="carousel-control-prev" type="button" data-bs-target="#watchCarousel" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon"></span>
//           </button>

//           <button className="carousel-control-next" type="button" data-bs-target="#watchCarousel" data-bs-slide="next">
//             <span className="carousel-control-next-icon"></span>
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// const PriceSection = () => {
//   const cards = [
//     {
//       img: "",
//       title: "Product 1",
//     },
//     {
//       img: "https://source.unsplash.com/collection/190727/1600x900",
//       title: "Product 2",
//     },
//     {
//       img: "https://source.unsplash.com/collection/190727/1600x900",
//       title: "Product 3",
//     },
//     {
//       img: "https://source.unsplash.com/collection/190727/1600x900",
//       title: "Product 4",
//     },
//     {
//       img: "https://source.unsplash.com/collection/190727/1600x900",
//       title: "Product 5",
//     },
//     {
//       img: "https://source.unsplash.com/collection/190727/1600x900",
//       title: "Product 6",
//     },
//   ];

//   return (
//     <section className="my-5">
//       <div
//         id="priceCarousel"
//         className="carousel slide"
//         data-bs-ride="carousel"
//         data-bs-interval="2500"
//       >
//         <div className="carousel-inner">
//           {/* Slice cards into groups of 3 */}
//           {Array.from({ length: Math.ceil(cards.length / 3) }).map(
//             (_, index) => {
//               const start = index * 3;
//               const group = cards.slice(start, start + 3);

//               return (
//                 <div
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                   key={index}
//                 >
//                   <div className="container">
//                     <div className="row g-3 justify-content-center">
//                       {group.map((card, i) => (
//                         <div
//                           className="col-12 col-sm-6 col-md-4"
//                           key={i}
//                         >
//                           <div className="card h-100 shadow-sm">
//                             <img
//                               src={card.img}
//                               className="card-img-top"
//                               alt="product"
//                             />
//                             <div className="card-body text-center">
//                               <h5 className="card-title">{card.title}</h5>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             }
//           )}
//         </div>

//         {/* Controls */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#priceCarousel"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon"></span>
//         </button>

//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#priceCarousel"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon"></span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PriceSection;

// 

import React from "react";
import watch1 from "../assets/img/watch1.jpg";
import watch2 from "../assets/img/watch2.jpg";
import watch3 from "../assets/img/watch3.jpg";
import watch4 from "../assets/img/watch4.jpg";
import watch5 from "../assets/img/watch5.jpg";
import watch9 from "../assets/img/watch9.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../assets/css/ProductSection.css";

const WatchCarousel = () => {
  const products = [
    { img: watch1, name: "LuxTime Gold Edition", price: "$899" },
    { img: watch2, name: "Royal Black Chrono", price: "$1099" },
    { img: watch3, name: "Vintage Steel Classic", price: "$799" },
    { img: watch4, name: "Elegance Leather Model", price: "$699" },
    { img: watch5, name: "Titanium X Pro", price: "$1299" },
    { img: watch9, name: "Gold Royale Supreme", price: "$1499" },
  ];

  return (
    <div className="watch-section " id="price">
      <div className="container my-5">
        <h2 className="text-center mb-4 watch-title">Our Premium Watches</h2>

        <div id="watchCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {products.map((_, index) => {
              if (index % 3 === 0) {
                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="row g-4 justify-content-center">
                      {products.slice(index, index + 3).map((item, i) => (
                        <div className="col-12 col-md-6 col-lg-4" key={i}>
                          <div className="card product-card">
                            <img src={item.img} className="card-img-top" alt="watch" />

                            {/* PRODUCT TEXT */}
                            <div className="card-body text-center text-light">
                              <h5 className="watch-name">{item.name}</h5>
                              <p className="watch-price">{item.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchCarousel;
