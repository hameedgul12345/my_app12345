// import Layout from "./Layout";
// import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
// function Home() {
//   const [redButton, setRedButton] = useState();
//   const [firstButton, setFirstButton] = useState(true);
//   const [secondButton, setSecondButton] = useState(false);
//   const [thirdButton, setThirdButton] = useState(false);
//   const navigate = useNavigate();
//   const handleButtons = () => {
//     setFirstButton(!firstButton);
//     setSecondButton(!secondButton);
//     setThirdButton(!thirdButton);
//   };
//   const heroleft = useRef(null);
//   const heroright = useRef(null);
//   const products = [
//     {
//       title: "Classic Watch",
//       image:
//         "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
//       price: 140,
//       oldPrice: 160,
//       sale: true,
//     },
//     {
//       title: "Smart Phone",
//       image:
//         "https://img.freepik.com/free-photo/picture-frame-with-abstract-art-by-pink-velvet-armchair_53876-128125.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
//       price: 110,
//       oldPrice: 120,
//       sale: true,
//     },
//     {
//       title: "NX-Speaker",
//       image:
//         "https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
//       price: 140,
//       oldPrice: null,
//       sale: false,
//     },
//     {
//       title: "Black Laptop",
//       image:
//         "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
//       price: 175,
//       oldPrice: 200,
//       sale: true,
//     },
//   ];
//   const thumbnails = [
//     "/images/watch1.png",
//     "/images/watch2.png",
//     "/images/watch3.png",
//     "/images/watch4.png",
//   ];
//   const [mainImage, setMainImage] = useState(thumbnails[0]);

//   const productsCamera = [
//     {
//       title: "Imported Cameras",
//       image: "/images/backcamera1.webp", // Replace with your actual path
//     },
//     {
//       title: "Brand New Watches",
//       image: "/images/backcamera2.webp", // Replace with your actual path
//     },
//   ];

//   const hero = [
//     {
//       option: firstButton,
//       h1: "Elegant Furniture ",
//       h2: "For Your Home",
//       p: "Discover our exclusive collection of handcrafted furniture that combines style and comfort. Each piece is designed to elevate your living space with a touch of sophistication.",
//       image: "/images/sofa2.png",
//     },
//     {
//       option: secondButton,
//       h1: "Stylish watch",
//       h2: "Accessorize Your Style",
//       p: "Explore our curated selection of watches that blend fashion and functionality. From classic designs to modern smartwatches, find the perfect timepiece to complement your look.",
//       image: "/images/watch4.webp",
//     },
//     {
//       option: thirdButton,
//       h1: " Beauty Essentials",
//       h2: "For Modern Living",
//       p: "Experience the essence of beauty with our range of skincare and cosmetic products. Each item is crafted to enhance your natural glow, ensuring you feel confident and radiant every day.",
//       image: "/images/beauty.png",
//     },
//   ];
//   const features = [
//     {
//       iconClass: "🚚",
//       title: "Fast Delivery",
//       desc: "We make sure your orders reach you quickly and safely. With our trusted delivery partners, you can expect your package at your doorstep in no time—because your time matters and we value your convenience.",
//     },
//     {
//       iconClass: "📦",
//       title: "Free Shipping",
//       desc: "No extra costs, no hidden fees. Enjoy free shipping on all your orders. Whether it's a small item or a bulk purchase, we deliver it without any delivery charges—making shopping easier and more affordable for you.",
//     },
//     {
//       iconClass: "🏆",
//       title: "Best Quality",
//       desc: "Our products are carefully chosen for durability and excellence. We work with trusted suppliers to ensure everything we sell meets high standards—because we believe you deserve only the best when it comes to quality and satisfaction.",
//     },
//   ];

//   const slides = [
//     {
//       id: 1,
//       title: "Bluetooth Gamepad",
//       subtitle: "IPEGA PG-9023",
//       tag: "WIRELESS BLUETOOTH GAMING",
//       button: "SHOP NOW",
//       image: "/images/mobile1.png",
//     },
//     {
//       id: 2,
//       title: "Samsung Galaxy",
//       subtitle: "S10+ Edge",
//       tag: "NEW DESIGN FEATURES",
//       button: "SHOP NOW",
//       image: "/images/headphone1.png",
//     },
//     {
//       id: 3,
//       title: "Samsung Galaxy",
//       subtitle: "S10+ Edge",
//       tag: "NEW DESIGN FEATURES",
//       button: "SHOP NOW",
//       image: "/images/camera1.png",
//     },
//   ];
//   const testimonials = [
//     {
//       name: "Jerome Bell",
//       title: "Web Designer",
//       rating: 4,
//       quote:
//         "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
//     },
//     {
//       name: "Annette Black",
//       title: "Dog Trainer",
//       rating: 4,
//       quote:
//         "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
//     },
//     {
//       name: "Ralph Edwards",
//       title: "UI/UX Designer",
//       rating: 4,
//       quote:
//         "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
//     },
//   ];

//   const StarRating = ({ count }) => (
//     <div className="text-yellow-400 mb-2">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <i
//           key={i}
//           className={`ri-star-${i < count ? "fill" : "line"} mr-1`}
//         ></i>
//       ))}
//     </div>
//   );

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sellingProducts = [
//     {
//       title: "CLASSIC WATCH",
//       price: 140.0,
//       oldPrice: 160.0,
//       rating: 5,
//       sku: "NX85A75K",
//       image: "/images/watch.png",
//     },
//     {
//       title: "SMART PHONE",
//       price: 110.0,
//       oldPrice: 200.0,
//       rating: 4,
//       sku: "NXM5811K",
//       image: "/images/phone.png",
//     },
//     {
//       title: "NX-SPEAKER",
//       price: 140.0,
//       oldPrice: null,
//       rating: 3,
//       sku: "NX85001S",
//       image: "/images/speaker.png",
//     },
//     {
//       title: "BLACK LAPTOP",
//       price: 175.0,
//       oldPrice: 200.0,
//       rating: 4,
//       sku: "NXL721S",
//       image: "/images/laptop.png",
//     },
//   ];
//   useEffect(() => {
//     gsap.fromTo(
//       heroleft.current,
//       { y: -250, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5 }
//     );
//     gsap.fromTo(
//       heroright.current,
//       { y: 250, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5 }
//     );
//   }, [firstButton, secondButton, thirdButton]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);
//   const mostSellingProducts = [
//     {
//       image:
//         "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
//       title: "Classic Watch",
//       price: 140,
//       oldPrice: 160,
//       sku: "NX95A7SK",
//       rating: 5,
//     },
//     {
//       image:
//         "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
//       title: "Smart Phone",
//       price: 110,
//       oldPrice: 180,
//       sku: "NXM981KS",
//       rating: 4,
//     },
//   ];

//   useGSAP(() => {
//   gsap.to("#img2", {
//     y: -20,
//     duration: 1.5,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",
//   });
// });

//   useGSAP(() => {
//   gsap.from("#img1", {
//     y: -20,
//     duration: 1.5,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",
//   });
// });

//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.from("#products", {
//       y: 60,
//       opacity: 0,
//       delay: 0.2,
//       duration: 0.1,
//       stagger: 0.5,
//       scrollTrigger: {
//         trigger: "#products",

//         scrub: true,
//         once: false,
//         start: "top 100%",
//         end: "top 50%",
//       },
//     });
//   });
//   return (
//     <>
//       <Layout>
//         {hero.map((item, index) =>
//           item.option ? (
//             <div
//               key={index}
//               className="flex flex-col  md:pb-0 pb-4  justify-
//                items-center w-full min-h-[80vh]  md:min-h-[85vh] bg-[#EE3623] relative overflow-hidden px-10"
//             >
//               <div className="flex flex-col-reverse   md:flex-row justify-around w-full">
//                 <div
//                   ref={heroleft}
//                   className="md:w-[50%] w-[100%] flex flex-col items-start justify-center gap-1 md:gap-4"
//                 >
//                   <h1 className="text-white text-3xl md:text-5xl font-bold">
//                     {item.h1}
//                   </h1>
//                   <h1 className="text-white text-2xl md:text-3xl font-bold">
//                     {item.h2}
//                   </h1>
//                   <p className="text-white text-[16px]">{item.p}</p>
//                   <button className=" text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition animate__animated animate__pulse animate__infinite animate__slower">
//                     Shop Now
//                   </button>
//                 </div>
//                 <div
//                   ref={heroright}
//                   className="w-[50%] hidden md:flex flex-col items-center justify-center gap-4"
//                 >
//                   <img
//                     src={item.image}
//                     alt={`Slide ${index}`}
//                     className="md:w-[70%]  w-[200%] h-auto animate__animated animate__pulse animate__infinite animate__slower"
//                   />
//                 </div>
//               </div>
//               <div className="absolute md:top-[470px] top-[350px] md:left-8 left-12 flex justify-start md:justify-center md:mt-0 mt-4  gap-4 items-center w-full h-6">
//                 <div
//                   className={` ${
//                     firstButton
//                       ? "w-12 h-4 rounded-2xl bg-green-500"
//                       : "w-4 h-4 rounded-full bg-white"
//                   }`}
//                   onClick={() =>
//                     setRedButton(() => {
//                       setFirstButton(!firstButton);
//                       setSecondButton(false);
//                       setThirdButton(false);
//                       // heroAnimation()
//                     })
//                   } // ✅ Call the function here
//                 ></div>
//                 <div
//                   className={` ${
//                     secondButton
//                       ? "w-12 h-4 rounded-2xl bg-green-500"
//                       : "w-4 h-4 rounded-full bg-white"
//                   }`}
//                   onClick={() =>
//                     setRedButton(() => {
//                       setFirstButton(false);
//                       setSecondButton(!secondButton);
//                       setThirdButton(false);
//                       //  heroAnimation()
//                     })
//                   } // ✅ Call the function here
//                 ></div>
//                 <div
//                   className={` ${
//                     thirdButton
//                       ? "w-12 h-4 rounded-2xl  bg-green-500"
//                       : "w-4 h-4 rounded-full bg-white"
//                   }`}
//                   onClick={() =>
//                     setRedButton(() => {
//                       setFirstButton(false);
//                       setSecondButton(false);
//                       setThirdButton(!thirdButton);
//                       //  heroAnimation()
//                     })
//                   } // ✅ Call the function here
//                 ></div>
//               </div>
//             </div>
//           ) : null
//         )}
       
//         <section className="py-16 text-center bg-white">
//           <h2
//             className="text-4xl font-bold text-[#EE3623] mb-2"
//             style={{
//               fontFamily: "Rowdies",
//               fontWeight: 400,
//               fontStyle: "normal",
//             }}
//           >
//             Why Shop With Us
//           </h2>
//           <div className="w-80 mt-4 h-1 mx-auto bg-[#EE3623] mb-10 rounded"></div>

//           <div className=" gap-6 px-4 w-full flex md:flex-row flex-col justify-between  overflow-hidden">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-[#EE3623] text-white rounded-lg w-full md:w-[40%] min-h-[40vh]  p-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
//               >
//                 <h1 className="text-2xl">{feature.iconClass}</h1>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-[14px] text-center">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//          <div className="flex flex-col md:flex-row w-full items-start justify-between px-4 md:px-12 py-12 gap-6 bg-white">
//           {/* Left Section */}
//           <div className="md:w-[40%] space-y-4">
//             <h2 className="text-2xl font-bold uppercase">Featured Products</h2>
//             <p className="text-sm text-gray-600">
//               Explore our exclusive collection of featured products that combine
//               style and functionality. Each item is carefully selected to enhance
//               your lifestyle, offering quality and value that you can trust.
//             </p>
//             <button  onClick={()=>navigate('/products')} className="bg-red-500 text-white text-sm px-5 py-2 rounded-full hover:bg-[#EE3623] transition">
//               Buy Now
//             </button>
//             <div>
//               <img
//                 src="https://img.freepik.com/free-vector/cosmetic-series-with-wild-cornflower-realistic_88138-228.jpg?uid=R114394203&ga=GA1.1.1840668077.1740570776&semt=ais_items_boosted&w=740"
//                 alt="Monitor Setup"
//                 className="rounded-lg w-full animate__animated animate__pulse animate__infinite animate__slower"
//               />
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="md:w-[60%] flex flex-col md:flex-row items-center gap-4">
//             <img
//               src="https://img.freepik.com/free-photo/3d-rendering-camera-with-photo-film_23-2150985249.jpg?uid=R114394203&ga=GA1.1.1840668077.1740570776&semt=ais_items_boosted&w=740"
//               alt="Camera Lens"
//               id="img2"
//               className="rounded-lg w-full h-[500px] md:w-1/2 object-cover"
//             />
//             <img
//               src="https://img.freepik.com/free-photo/interior-design-house-modern-wooden-table-chair_657883-324.jpg?uid=R114394203&ga=GA1.1.1840668077.1740570776&semt=ais_items_boosted&w=740"
//               id="img1"
//               alt="Phone on Desk"
//               className="rounded-lg  h-[500px] w-full md:w-1/2 object-cover"
//             />
//           </div>
//         </div>
//         <section className=" py-12 px-4">
//           <div className="text-center mb-10 flex flex-col items-center">
//             <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
//               Flash Sale
//             </span>
//             <h2 className="text-3xl font-bold mt-4 border-t-2 border-red-500 pt-4 inline-block">
//               LATEST PRODUCTS
//             </h2>
//           </div>

//           <div
//             className="flex flex-wrap justify-center gap-6"
//             onClick={() => navigate("/singleproduct")}
//           >
//             {products.map((product, index) => (
//               <div
//                 id="products"
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden w-64 relative"
//               >
//                 {product.sale && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                     On Sale
//                   </span>
//                 )}
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4  flex justify-between flex-col ">
//                   <div className="flex justify-start mb-2">
//                     {[...Array(4)].map((_, i) => (
//                       <i
//                         key={i}
//                         className="ri-star-fill text-yellow-400 text-sm"
//                       ></i>
//                     ))}
//                   </div>
//                   <h3 className="font-bold text-md uppercase">
//                     {product.title}
//                   </h3>
//                   <p className="text-lg font-bold mt-2">
//                     ${product.price.toFixed(2)} USD{" "}
//                     {product.oldPrice && (
//                       <span className="text-gray-400 line-through ml-2 text-sm">
//                         ${product.oldPrice.toFixed(2)} USD
//                       </span>
//                     )}
//                   </p>
//                   <button
//                     className="mt-3 px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
//                     onClick={() => navigate("/singleproduct")}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//         <div className="flex flex-row  justify-center gap-8 p-6 w-full">
//           {productsCamera.map((product, index) => (
//             <div
//               key={index}
//               className="relative w-[40%] h-72 rounded-xl overflow-hidden shadow-md animate__animated animate__pulse animate__infinite animate__slower"
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="object-cover w-full h-full"
//               />
//               <div className="absolute bottom-2 left-2 text-white text-lg font-semibold drop-shadow">
//                 {product.title}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-wrap justify-center gap-6 p-8 bg-white text-white">
//           {/* Left Card */}
//           <div className="bg-black rounded-xl w-64 p-6 flex flex-col items-center text-center">
//             <span className="bg-green-600 text-xs px-3 py-1 rounded-full mb-2">
//               Monthly Deals
//             </span>
//             <h2 className="text-lg font-bold text-white mb-4">
//               LATEST HEADPHONES
//             </h2>
//             <img
//               src="/images/headphone1.png" // Replace with your white headphone image path
//               alt="Latest Headphones"
//               className="w-40 h-auto"
//             />
//           </div>

//           {/* Right Card */}
//           <div className="bg-black rounded-xl flex flex-col lg:flex-row p-6 w-full lg:w-[800px] gap-4">
//             {/* Side Thumbnails */}
//             <div className="flex lg:flex-col gap-3">
//               {["camera1.png", "sofa2.png", "headphone1.png", "watch1.png"].map(
//                 (img, index) => (
//                   <img
//                     key={index}
//                     src={`/images/${img}`} // Replace with actual thumbnail paths
//                     alt="Thumbnail"
//                     className={`w-12 h-12 border-2 rounded-lg p-1 ${
//                       index === 1 ? "border-green-600" : "border-white"
//                     }`}
//                   />
//                 )
//               )}
//             </div>

//             {/* Main Image */}
//             <div className="flex-1">
//               <img
//                 src="/images/headphone1.png" // Replace with main image path
//                 alt="Stereo Headphones"
//                 className="rounded-xl w-full object-cover"
//               />
//             </div>

//             {/* Product Details */}
//             <div className="flex-1 text-left">
//               <h3 className="text-xl font-bold">Stereo Headphone</h3>
//               <div className="flex items-center text-yellow-400 text-sm mt-1 mb-2">
//                 ★★★★★
//               </div>
//               <p className="text-green-500 font-semibold text-lg mb-2">
//                 $ 100.00 USD
//               </p>
//               <p className="text-sm text-gray-300 mb-4">
//                 Effect font move vertical share. Connection frame edit export
//                 arrow. Undo device move opacity image layer. List star blur
//                 strikethrough arrow.
//               </p>
//               <p className="text-sm text-white">
//                 SKU: <span className="text-gray-400">NXHPZ71</span>
//               </p>
//               <p className="text-sm mb-4">
//                 STOCK: <span className="text-green-500">AVAILABLE</span>
//               </p>
//               <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* <div className=" bg-gray-100 min-h-screen p-6">
//           {mostSellingProducts.map((product, index) => (
//             <div className="flex flex-row " >
//               <div className="flex flex-row " key={index}>
// <img src={product.image} className="w-[100px]" alt="" />

//               </div>
//             </div>
//           ))}
//         </div> */}
//         <div
//           className="bg-cover bg-center py-16 px-4 text-center"
//           style={{ backgroundImage: `url('/images/backreview1.jpg')` }}
//         >
//           <h3 className="text-sm uppercase bg-black text-white px-4 py-1 inline-block mb-3">
//             Testimonials
//           </h3>
//           <h2 className="text-4xl font-bold mb-12 text-white">
//             Client Feedback
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//             {testimonials.map((item, idx) => (
//               <div key={idx} className="bg-white p-6 shadow-lg relative">
//                 <StarRating count={item.rating} />
//                 <h3 className="text-lg font-bold">{item.name}</h3>
//                 <p className="text-sm text-gray-600 mb-4">{item.title}</p>
//                 <p className="text-gray-700 text-sm">{item.quote}</p>
//                 <div className="absolute top-4 right-4 text-3xl text-yellow-600">
//                   <i className="ri-double-quotes-l"></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }

// export default Home;

{
  /* <div
  className="w-full flex flex-row items-start justify-between min-h-[90vh] pb-8  "
  // style={{
  //   backgroundImage: `url('/images/backhero.jpg')`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // }}
>
  {/* <div className="md:w-[50%] w-[100%] pt-12 px-6 md:pt-24 md:px-12 flex flex-col items-start justify-center gap-4">
            <h1
              className="text-4xl font-medium text-[#ffffff] "
              style={{
                fontFamily: "Signika",
                FontSize:'76.8px',
               LineHeight:'76.8px',
               FontWeight:'Bold (700)',
             LetterSpacing:'normal'
              }}
            >
              Tradition in Every Touch
            </h1>
            <p className="text-[#ffffff] text-[16px]">
              Each item in our store is carefully selected to bring you quality,
              style, and value. We focus on offering products that meet your
              everyday needs while adding comfort and convenience to your life.
              When you shop with us, you’re not just making a purchase — you’re
              choosing reliability, saving time, and enjoying a smooth online
              shopping experience.
            </p>
            <button className="bg-[#16b43d] font-semibold px-4 py-2 w-36 text-xl rounded-full text-white">
             Shop Now
            </button>
          </div>
          */
}
{
  /* <div className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 flex items-center justify-between px-10 md:px-20 bg-white transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
                }`}
              >
                <div className="max-w-lg text-left">
                  <p className="text-sm text-gray-500">{slide.tag}</p>
                  <h1 className="text-4xl font-bold text-black mt-2">
                    {slide.title}
                    <br />
                    <span className="text-black font-extrabold">
                      {slide.subtitle}
                    </span>
                  </h1>
                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">
                    {slide.button}
                  </button>
                </div>
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="h-80 object-contain hidden md:block"
                />
              </div>
            ))}
  //         </div> */
}

// {hero.map((item, index) => (
//   <div
//     key={index}
//     className="flex flex-row justify-between items-center w-full h-screen bg-black relative overflow-hidden px-10"
//   >
//     <div>
//       <h1 className="text-white text-4xl font-bold">{item.h1}</h1>
//     </div>
//     <div>
//       <img src={item.image} alt={`Slide ${index}`} className="w-80 h-auto" />
//     </div>
//   </div>
// ))}
// </div>; */}
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Layout from './Layout';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const swiperRef = useRef(null);

const productsCamera = [
    {
      title: "Imported Cameras",
      image: "/images/backcamera1.webp", // Replace with your actual path
    },
     {
      title: "Branded New Cosmatics",
      image: "https://img.freepik.com/premium-photo/creative-cosmetics-composition-advertisement-commercial-photoshoot_950002-54660.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740", // Replace with your actual path
    },
    {
      title: "Brand New Watches",
      image: "/images/backcamera2.webp", // Replace with your actual path
    },
    
    {
      title: "Brand New Furniture",
      image: "https://img.freepik.com/premium-photo/contemporary-living-room-with-dining-table-set-colorful-chairs-stylish-lighting-fixtures_146105-22072.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740", // Replace with your actual path
    },
  ];

   useGSAP(() => {
      gsap.to("#img2", {
        y: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    useGSAP(() => {
      gsap.from("#img1", {
        y: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  useEffect(() => {
    setIsLoaded(true);

    
    
    const handleClickOutside = (event) => {
      const container = document.getElementById('userMenuContainer');
      const menu = document.getElementById('userDropdownMenu');
      const button = document.getElementById('userMenuButton');
      
      if (container && !container.contains(event.target) && menu) {
        menu.classList.remove('opacity-100', 'translate-y-0');
        menu.classList.add('opacity-0', 'translate-y-[-10px]');
        setTimeout(() => {
          menu.style.display = 'none';
        }, 200);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
   <Layout>
     <div className="min-h-screen bg-gray-100">
      {/* Header */}
      {/* <header className="bg-[#2a1e1e] text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl font-bold">GadgetZ</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem text="Home" active />
            <NavItem text="About" />
            <NavItem text="Blog" />
            <NavItem text="Shop" />
            <NavItem text="Pages" />
            <NavItem text="Contact" />
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
              <i className="fas fa-search"></i>
            </button>
            <div className="relative" id="userMenuContainer">
              <button
                id="userMenuButton"
                className="text-white hover:text-[#ff5733] transition-colors duration-300 cursor-pointer"
                onClick={() => {
                  const menu = document.getElementById('userDropdownMenu');
                  const isVisible = menu?.classList.contains('opacity-100');
                  if (isVisible) {
                    menu.classList.remove('opacity-100', 'translate-y-0');
                    menu.classList.add('opacity-0', 'translate-y-[-10px]');
                    setTimeout(() => {
                      menu.style.display = 'none';
                    }, 200);
                  } else if (menu) {
                    menu.style.display = 'block';
                    setTimeout(() => {
                      menu.classList.remove('opacity-0', 'translate-y-[-10px]');
                      menu.classList.add('opacity-100', 'translate-y-0');
                    }, 0);
                  }
                }}
              >
                <i className="fas fa-user"></i>
              </button>
              <div
                id="userDropdownMenu"
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 translate-y-[-10px] transition-all duration-200 ease-out hidden"
              >
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#ff5733] hover:text-white transition-colors duration-200">
                  <i className="fas fa-sign-in-alt mr-2"></i>Login
                </a>
                <a href="https://readdy.ai/home/7c7f40d6-eefd-42f8-a3d9-ca585a85bfe9/021ed0cb-afd2-48ec-a17a-595a3b70b985" data-readdy="true" className="block px-4 py-2 text-gray-800 hover:bg-[#ff5733] hover:text-white transition-colors duration-200">
                  <i className="fas fa-user-plus mr-2"></i>Register
                </a>
              </div>
            </div>
            <button className="text-white hover:text-[#ff5733] transition-colors duration-300 relative cursor-pointer">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-2 -right-2 bg-[#ff5733] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                4
              </span>
            </button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#ff5733] to-[#ff7433] min-h-[600px] relative">
          {/* Diagonal shapes */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-100 transform -skew-y-3 origin-bottom-left"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-black transform skew-y-12 origin-bottom-right"></div>
          <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className={`md:w-1/2 z-10 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} transition-all duration-1000 ease-out`}>
              <h2 className="text-white text-5xl md:text-7xl font-bold mb-6">LUXURY LIFESTYLE</h2>
              <p className="text-white text-lg mb-8 opacity-90">Discover our exclusive collection of premium lifestyle products.</p>
              <button className="bg-[#ff5733] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg !rounded-button whitespace-nowrap cursor-pointer border-2 border-white">
                BUY NOW
              </button>
            </div>
            {/* Watch Image */}
            <div className={`md:w-1/2 mt-10 md:mt-0 z-10 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transition-all duration-1000 delay-300 ease-out`}>
              <div className="relative md:w-full h-full flex justify-center items-center">
                <div className="bg-white rounded-full md:w-[450px] w-[250px] md:h-[450px] h-[250px] flex items-center justify-center overflow-hidden shadow-2xl hover:animate-float relative group">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    className="w-full h-full"
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                  >
                    <SwiperSlide className="flex items-center justify-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Elegant%20handcrafted%20wooden%20furniture%20set%20with%20intricate%20carved%20details%2C%20premium%20living%20room%20arrangement%20with%20sophisticated%20sofa%20and%20coffee%20table%2C%20luxurious%20home%20decor%20on%20minimalist%20white%20background%2C%20professional%20interior%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=10&orientation=squarish"
                        alt="Luxury Furniture"
                        className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Exquisite%20handmade%20ceramic%20vase%20with%20traditional%20patterns%2C%20artisanal%20pottery%20with%20intricate%20details%2C%20premium%20handicraft%20masterpiece%20on%20minimalist%20white%20background%2C%20professional%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=11&orientation=squarish"
                        alt="Artisanal Handicraft"
                        className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Luxurious%20diamond%20necklace%20with%20precious%20gemstones%2C%20high-end%20jewelry%20piece%20with%20intricate%20gold%20setting%2C%20premium%20jewellery%20on%20minimalist%20white%20background%2C%20professional%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=12&orientation=squarish"
                        alt="Luxury Jewelry"
                        className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Premium%20organic%20skincare%20set%20with%20luxury%20packaging%2C%20high-end%20beauty%20and%20wellness%20products%20with%20natural%20ingredients%2C%20professional%20cosmetics%20on%20minimalist%20white%20background%2C%20elegant%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=13&orientation=squarish"
                        alt="Beauty Products"
                        className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                  <button onClick={goPrev} className="bg-white w-8 h-8 font-bold  rounded-full shadow-lg hover:bg-[#ff5733] hover:text-white transition-colors duration-300 group">
                  <i class="ri-skip-right-line"></i>
                  </button>
                  <button onClick={goNext} className="bg-white font-bold  w-8 h-8 rounded-full shadow-lg hover:bg-[#ff5733] hover:text-white transition-colors duration-300 group">
                   <i className="ri-skip-left-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<div className="flex flex-col md:flex-row w-full items-start justify-between px-4 md:px-12 py-12 gap-6 bg-white">
  {/* Left Section */}
  <div className="md:w-[40%] space-y-4">
    <h2 className="text-2xl font-bold uppercase">Featured Products</h2>
    <p className="text-sm text-gray-600">
      Explore our exclusive collection of featured products that combine
      style and functionality. Each item is carefully selected to enhance
      your lifestyle, offering quality and value that you can trust.
    </p>
    <button onClick={() => navigate('/products')} className="bg-[#ff5733] text-white text-sm px-5 py-2 rounded-full hover:bg-[#EE3623] transition">
      Buy Now
    </button>
    <div>
      <img
        src="https://img.freepik.com/free-vector/cosmetic-series-with-wild-cornflower-realistic_88138-228.jpg?uid=R114394203&ga=GA1.1.1840668077.1740570776&semt=ais_items_boosted&w=740"
        alt="Monitor Setup"
        className="rounded-lg w-full animate__animated animate__pulse animate__infinite animate__slower"
      />
    </div>
  </div>

  {/* Right Section */}
  <div className="md:w-[60%] flex flex-col md:flex-row items-center gap-4">
    <img
      src="https://img.freepik.com/free-photo/3d-rendering-camera-with-photo-film_23-2150985249.jpg?uid=R114394203&ga=GA1.1.1840668077.1740570776&semt=ais_items_boosted&w=740"
      alt="Camera Lens"
      id="img2"
      className="rounded-lg w-full h-[500px] md:w-1/2 object-cover"
    />
    <img
      src="https://img.freepik.com/free-photo/interior-design-house-modern-wooden-table-chair_657883-324.jpg?uid=R114394203&ga=GA1.1.1840668077.1740570776&semt=ais_items_boosted&w=740"
      id="img1"
      alt="Phone on Desk"
      className="rounded-lg h-[500px] w-full md:w-1/2 object-cover"
    />
  </div>
</div>

      {/* Latest Products Section */}
      <section className={`py-16 px-6 bg-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-600`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                delay={index * 100}
                isLoaded={isLoaded}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Collection Banner */}
      <section className={`py-16 px-6 bg-gray-100 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-900`}>
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-[#333] to-[#111] rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h3 className="text-white text-4xl font-bold mb-4">New Collection 2025</h3>
                <p className="text-gray-300 mb-8">Discover our latest timepieces crafted with precision and elegance. Perfect for those who appreciate fine craftsmanship and timeless design.</p>
                <button className="bg-[#ff5733] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-[#ff5733] transition-all duration-300 hover:scale-105 hover:shadow-lg self-start !rounded-button whitespace-nowrap cursor-pointer">
                  EXPLORE NOW
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20watch%20collection%20display%2C%20multiple%20premium%20watches%20arranged%20elegantly%20on%20dark%20background%2C%20high-end%20timepieces%20showcase%2C%20professional%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20detailed%20studio%20shot&width=700&height=500&seq=2&orientation=landscape"
                  alt="Watch Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
<div className="grid md:grid-cols-4 grid-cols-1 gap-8 p-6 w-full">
  {productsCamera.map((product, index) => (
    <div
      key={index}
      className="relative w-[100%] md:w-[100%] h-72 rounded-xl overflow-hidden shadow-md animate__animated animate__pulse animate__infinite animate__slower"
    >
      <img
        src={product.image}
        alt={product.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-2 left-2 text-white text-lg font-semibold drop-shadow">
        {product.title}
      </div>
    </div>
  ))}
</div>
      

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hover\\:rotate-360:hover {
          animation: rotate-360 20s linear infinite;
        }
        .hover\\:animate-float:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
   </Layout>
  );
};

// Navigation Item Component
const NavItem = ({ text, active }) => {
  return (
    <a
      href="#"
      className={`relative group cursor-pointer ${
        active ? 'text-[#ff5733]' : 'text-white'
      }`}
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff5733] transition-all duration-300 group-hover:w-full"></span>
      <i className={`ml-1 fas fa-chevron-down text-xs ${active ? 'text-[#ff5733]' : 'text-white'}`}></i>
    </a>
  );
};

// Product Card Component
const ProductCard = ({ product, delay, isLoaded }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transform ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-[#ff5733] text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
        )}
        {product.isSale && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-[#ff5733] p-3 rounded-full mx-2 hover:bg-[#ff5733] hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="bg-white text-[#ff5733] p-3 rounded-full mx-2 hover:bg-[#ff5733] hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
            <i className="fas fa-heart"></i>
          </button>
          <button className="bg-white text-[#ff5733] p-3 rounded-full mx-2 hover:bg-[#ff5733] hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[#ff5733] font-bold">{product.price}</span>
          <div className="flex text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data
const featuredProducts = [
  {
    name: "Cosmetic Kit",
    price: "$299.99",
    image: "https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150217985.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
    isNew: true
  },
  {
    name: "Wooden Watch",
    price: "$349.99",
    image: "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740"
  },
  {
    name: "Camera Lens",
    price: "$499.99",
    image: "https://img.freepik.com/free-photo/blank-notebook-with-red-camera_23-2148267485.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
    isSale: true
  },
  {
    name: "Furniture",
    price: "$279.99",
    image: "https://img.freepik.com/premium-photo/luxury-modern-interior-living-room-ultraviolet-home-decor-concept_33739-182.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740"
  }
];

export default App;