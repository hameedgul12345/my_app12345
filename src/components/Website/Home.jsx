import Layout from "./Layout";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const [redButton, setRedButton] = useState();
  const [firstButton, setFirstButton] = useState(true);
  const [secondButton, setSecondButton] = useState(false);
  const [thirdButton, setThirdButton] = useState(false);
  const navigate = useNavigate();
  const handleButtons = () => {
    setFirstButton(!firstButton);
    setSecondButton(!secondButton);
    setThirdButton(!thirdButton);
  };
  const heroleft = useRef(null);
  const heroright = useRef(null);
  const products = [
    {
      title: "Classic Watch",
      image:
        "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      price: 140,
      oldPrice: 160,
      sale: true,
    },
    {
      title: "Smart Phone",
      image:
        "https://img.freepik.com/free-photo/picture-frame-with-abstract-art-by-pink-velvet-armchair_53876-128125.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      price: 110,
      oldPrice: 120,
      sale: true,
    },
    {
      title: "NX-Speaker",
      image:
        "https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      price: 140,
      oldPrice: null,
      sale: false,
    },
    {
      title: "Black Laptop",
      image:
        "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      price: 175,
      oldPrice: 200,
      sale: true,
    },
  ];
   const thumbnails = [
    "/images/watch1.png",
    "/images/watch2.png",
    "/images/watch3.png",
    "/images/watch4.png",
  ];
  const [mainImage, setMainImage] = useState(thumbnails[0]);

  const productsCamera = [
    {
      title: "Imported Cameras",
      image: "/images/backcamera1.jpg", // Replace with your actual path
    },
    {
      title: "Brand New Watches",
      image: "/images/backcamera2.jpg", // Replace with your actual path
    },
  ];

  const hero = [
    {
      option: firstButton,
      h1: "Elegant Furniture ",
      h2: "For Your Home",
      p: "Discover our exclusive collection of handcrafted furniture that combines style and comfort. Each piece is designed to elevate your living space with a touch of sophistication.",
      image: "/images/sofa2.png",
    },
    {
      option: secondButton,
      h1: "Stylish watch",
      h2: "Accessorize Your Style",
      p: "Explore our curated selection of watches that blend fashion and functionality. From classic designs to modern smartwatches, find the perfect timepiece to complement your look.",
      image: "/images/watch2.png",
    },
    {
      option: thirdButton,
      h1: " Beauty Essentials",
      h2: "For Modern Living",
      p: "Experience the essence of beauty with our range of skincare and cosmetic products. Each item is crafted to enhance your natural glow, ensuring you feel confident and radiant every day.",
      image: "/images/beauty.png",
    },
  ];
  const features = [
    {
      iconClass: "🚚",
      title: "Fast Delivery",
      desc: "We make sure your orders reach you quickly and safely. With our trusted delivery partners, you can expect your package at your doorstep in no time—because your time matters and we value your convenience.",
    },
    {
      iconClass: "📦",
      title: "Free Shipping",
      desc: "No extra costs, no hidden fees. Enjoy free shipping on all your orders. Whether it's a small item or a bulk purchase, we deliver it without any delivery charges—making shopping easier and more affordable for you.",
    },
    {
      iconClass: "🏆",
      title: "Best Quality",
      desc: "Our products are carefully chosen for durability and excellence. We work with trusted suppliers to ensure everything we sell meets high standards—because we believe you deserve only the best when it comes to quality and satisfaction.",
    },
  ];

  const slides = [
    {
      id: 1,
      title: "Bluetooth Gamepad",
      subtitle: "IPEGA PG-9023",
      tag: "WIRELESS BLUETOOTH GAMING",
      button: "SHOP NOW",
      image: "/images/mobile1.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy",
      subtitle: "S10+ Edge",
      tag: "NEW DESIGN FEATURES",
      button: "SHOP NOW",
      image: "/images/headphone1.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy",
      subtitle: "S10+ Edge",
      tag: "NEW DESIGN FEATURES",
      button: "SHOP NOW",
      image: "/images/camera1.png",
    },
  ];
  const testimonials = [
    {
      name: "Jerome Bell",
      title: "Web Designer",
      rating: 4,
      quote:
        "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
    },
    {
      name: "Annette Black",
      title: "Dog Trainer",
      rating: 4,
      quote:
        "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
    },
    {
      name: "Ralph Edwards",
      title: "UI/UX Designer",
      rating: 4,
      quote:
        "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
    },
  ];

  const StarRating = ({ count }) => (
    <div className="text-yellow-400 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`ri-star-${i < count ? "fill" : "line"} mr-1`}
        ></i>
      ))}
    </div>
  );

  const [currentSlide, setCurrentSlide] = useState(0);
const sellingProducts = [
  {
    title: "CLASSIC WATCH",
    price: 140.0,
    oldPrice: 160.0,
    rating: 5,
    sku: "NX85A75K",
    image: "/images/watch.png",
  },
  {
    title: "SMART PHONE",
    price: 110.0,
    oldPrice: 200.0,
    rating: 4,
    sku: "NXM5811K",
    image: "/images/phone.png",
  },
  {
    title: "NX-SPEAKER",
    price: 140.0,
    oldPrice: null,
    rating: 3,
    sku: "NX85001S",
    image: "/images/speaker.png",
  },
  {
    title: "BLACK LAPTOP",
    price: 175.0,
    oldPrice: 200.0,
    rating: 4,
    sku: "NXL721S",
    image: "/images/laptop.png",
  },
];
  useEffect(() => {
    gsap.fromTo(
      heroleft.current,
      { y: -250, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
    gsap.fromTo(
      heroright.current,
      { y: 250, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  }, [firstButton, secondButton, thirdButton]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#products", {
      y: 60,
      opacity: 0,
      delay: 0.2,
      duration: 0.1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#products",

        scrub: true,
        once: false,
        start: "top 100%",
        end: "top 50%",
      },
    });
  });
  return (
    <>
      <Layout>
        {hero.map((item, index) =>
          item.option ? (
            <div
              key={index}
              className="flex flex-col  md:pb-0 pb-4  justify-center items-center w-full min-h-[85vh] bg-black relative overflow-hidden px-10"
            >
              <div className="flex flex-col-reverse   md:flex-row justify-around w-full">
                <div
                  ref={heroleft}
                  className="md:w-[50%] w-[100%] flex flex-col items-start justify-center gap-4"
                >
                  <h1 className="text-green-500 text-3xl md:text-5xl font-bold">
                    {item.h1}
                  </h1>
                  <h1 className="text-white text-2xl md:text-3xl font-bold">{item.h2}</h1>
                  <p className="text-white text-[16px]">{item.p}</p>
                  <button className="bg-black text-green-500 border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition animate__animated animate__pulse animate__infinite animate__slower">
                    Shop Now
                  </button>
                </div>
                <div
                  ref={heroright}
                  className="w-[50%] flex flex-col items-center justify-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={`Slide ${index}`}
                    className="md:w-[70%] w-[200%] h-auto animate__animated animate__pulse animate__infinite animate__slower"
                  />
                </div>
              </div>
              <div className="flex justify-start md:justify-center md:mt-0 mt-4  gap-4 items-center w-full h-6">
                <div
                  className={` ${
                    firstButton
                      ? "w-12 h-4 rounded-2xl bg-green-500"
                      : "w-4 h-4 rounded-full bg-white"
                  }`}
                  onClick={() =>
                    setRedButton(() => {
                      setFirstButton(!firstButton);
                      setSecondButton(false);
                      setThirdButton(false);
                      // heroAnimation()
                    })
                  } // ✅ Call the function here
                ></div>
                <div
                  className={` ${
                    secondButton
                      ? "w-12 h-4 rounded-2xl bg-green-500"
                      : "w-4 h-4 rounded-full bg-white"
                  }`}
                  onClick={() =>
                    setRedButton(() => {
                      setFirstButton(false);
                      setSecondButton(!secondButton);
                      setThirdButton(false);
                      //  heroAnimation()
                    })
                  } // ✅ Call the function here
                ></div>
                <div
                  className={` ${
                    thirdButton
                      ? "w-12 h-4 rounded-2xl  bg-green-500"
                      : "w-4 h-4 rounded-full bg-white"
                  }`}
                  onClick={() =>
                    setRedButton(() => {
                      setFirstButton(false);
                      setSecondButton(false);
                      setThirdButton(!thirdButton);
                      //  heroAnimation()
                    })
                  } // ✅ Call the function here
                ></div>
              </div>
            </div>
          ) : null
        )}

        <section className="py-16 text-center bg-white">
          <h2
            className="text-4xl font-bold text-[#16b43d] mb-2"
            style={{
              fontFamily: "Rowdies",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Why Shop With Us
          </h2>
          <div className="w-20 h-1 mx-auto bg-[#16b43d] mb-10 rounded"></div>

          <div className=" gap-6 px-4 w-full flex md:flex-row flex-col justify-between  overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#16b43d] text-white rounded-lg w-full md:w-[40%] min-h-[40vh]  p-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
              >
                <h1 className="text-2xl">{feature.iconClass}</h1>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[14px] text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className=" py-12 px-4">
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
              Flash Sale
            </span>
            <h2 className="text-3xl font-bold mt-4 border-t-2 border-red-500 pt-4 inline-block">
              LATEST PRODUCTS
            </h2>
          </div>

          <div
            className="flex flex-wrap justify-center gap-6"
            onClick={() => navigate("/singleproduct")}
          >
            {products.map((product, index) => (
              <div
                id="products"
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden w-64 relative"
              >
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    On Sale
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4  flex justify-between flex-col ">
                  <div className="flex justify-start mb-2">
                    {[...Array(4)].map((_, i) => (
                      <i
                        key={i}
                        className="ri-star-fill text-yellow-400 text-sm"
                      ></i>
                    ))}
                  </div>
                  <h3 className="font-bold text-md uppercase">
                    {product.title}
                  </h3>
                  <p className="text-lg font-bold mt-2">
                    ${product.price.toFixed(2)} USD{" "}
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through ml-2 text-sm">
                        ${product.oldPrice.toFixed(2)} USD
                      </span>
                    )}
                  </p>
                  <button
                    className="mt-3 px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
                    onClick={() => navigate("/singleproduct")}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex flex-row  justify-center gap-8 p-6 w-full">
          {productsCamera.map((product, index) => (
            <div
              key={index}
              className="relative w-[40%] h-72 rounded-xl overflow-hidden shadow-md animate__animated animate__pulse animate__infinite animate__slower"
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
         <div className="flex flex-wrap justify-center gap-6 p-8 bg-white text-white">
      {/* Left Card */}
      <div className="bg-black rounded-xl w-64 p-6 flex flex-col items-center text-center">
        <span className="bg-green-600 text-xs px-3 py-1 rounded-full mb-2">Monthly Deals</span>
        <h2 className="text-lg font-bold text-white mb-4">LATEST HEADPHONES</h2>
        <img
          src="/images/headphone1.png" // Replace with your white headphone image path
          alt="Latest Headphones"
          className="w-40 h-auto"
        />
      </div>

      {/* Right Card */}
      <div className="bg-black rounded-xl flex flex-col lg:flex-row p-6 w-full lg:w-[800px] gap-4">
        {/* Side Thumbnails */}
        <div className="flex lg:flex-col gap-3">
          {["camera1.png", "sofa2.png", "headphone1.png", "watch1.png"].map((img, index) => (
            <img
              key={index}
              src={`/images/${img}`} // Replace with actual thumbnail paths
              alt="Thumbnail"
              className={`w-12 h-12 border-2 rounded-lg p-1 ${index === 1 ? "border-green-600" : "border-white"}`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            src="/images/headphone1.png" // Replace with main image path
            alt="Stereo Headphones"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 text-left">
          <h3 className="text-xl font-bold">Stereo Headphone</h3>
          <div className="flex items-center text-yellow-400 text-sm mt-1 mb-2">
            ★★★★★
          </div>
          <p className="text-green-500 font-semibold text-lg mb-2">$ 100.00 USD</p>
          <p className="text-sm text-gray-300 mb-4">
            Effect font move vertical share. Connection frame edit export arrow. Undo device move opacity image layer. List star blur strikethrough arrow.
          </p>
          <p className="text-sm text-white">SKU: <span className="text-gray-400">NXHPZ71</span></p>
          <p className="text-sm mb-4">STOCK: <span className="text-green-500">AVAILABLE</span></p>
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
        <div
          className="bg-cover bg-center py-16 px-4 text-center"
          style={{ backgroundImage: `url('/images/backreview1.jpg')` }}
        >
          <h3 className="text-sm uppercase bg-black text-white px-4 py-1 inline-block mb-3">
            Testimonials
          </h3>
          <h2 className="text-4xl font-bold mb-12 text-white">
            Client Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-6 shadow-lg relative">
                <StarRating count={item.rating} />
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.quote}</p>
                <div className="absolute top-4 right-4 text-3xl text-yellow-600">
                  <i className="ri-double-quotes-l"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;

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
