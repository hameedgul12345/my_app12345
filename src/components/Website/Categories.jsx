import React, { useRef, useState } from "react";
import Layout from "./Layout";

const products = [
  {
    id: 1,
    category: "TECHNOLOGY",
    name: "VR Headset",
    price: "$579.99 USD",
    image: "/images/vr-headset.png",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    name: "Wireless Keyboard",
    price: "$49.99 USD",
    image: "/images/keyboard.png",
  },
  {
    id: 3,
    category: "GEAR",
    name: "Backpack",
    price: "$39.99 USD",
    image: "https://img.freepik.com/premium-photo/glowing-gadgets_960396-179610.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
  },
   {
    id: 4,
    category: "TECHNOLOGY",
    name: "Wireless Keyboard",
    price: "$49.99 USD",
    image: "/images/keyboard.png",
  },
  {
    id: 5,
    category: "GEAR",
    name: "Backpack",
    price: "$39.99 USD",
    image: "https://img.freepik.com/premium-photo/glowing-gadgets_960396-179610.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
  }, {
    id: 6,
    category: "TECHNOLOGY",
    name: "Wireless Keyboard",
    price: "$49.99 USD",
    image: "/images/keyboard.png",
  },
  {
    id: 7,
    category: "GEAR",
    name: "Backpack",
    price: "$39.99 USD",
    image: "https://img.freepik.com/premium-photo/glowing-gadgets_960396-179610.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
  }, {
    id: 8,
    category: "TECHNOLOGY",
    name: "Wireless Keyboard",
    price: "$49.99 USD",
    image: "/images/keyboard.png",
  },
  {
    id: 39,
    category: "GEAR",
    name: "Backpack",
    price: "$39.99 USD",
    image: "https://img.freepik.com/premium-photo/glowing-gadgets_960396-179610.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
  },
  {
    id: 10,
    category: "GEAR",
    name: "iPhone Case",
    price: "$29.99 USD",
    image: "/images/iphone-case.png",
  },
];

function Categories() {
    const [index, setIndex] = useState(0);
  const visibleCount = 5; // Show 3 items at a time

  const next = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const current = (index + i) % products.length;
      result.push(products[current]);
    }
    return result;
  };
  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Technology Products</h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
              Explore our wide range of technology products designed to enhance
              your digital experience. From the latest gadgets to innovative
              software, we have everything you need to stay connected and
              productive.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/630784cc70ef0552ae1e91dc/6310fc783d2c1c03404459a2_product-category-hero-image-shopper-webflow-ecommerce-template-p-800.jpg"
              alt="Technology Products"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        </div>
        {/* <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold mb-6">Featured products</h2>
            <div>
              <button
                onClick={prev}
                className="bg-white text-black rounded-full shadow px-3 py-2 text-lg"
              >
                ←
              </button>
              <button
          onClick={next}
          className="bg-black text-white rounded-full shadow px-3 py-2 text-lg"
        >
          →
        </button>
            </div>
            
          </div>

          <div className="flex items-center gap-4">
            <div className="flex overflow-hidden space-x-6">
              {products.slice(index, index + 4).map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 bg-white p-4 rounded-xl shadow w-60"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 mx-auto mb-4 object-contain"
                  />
                  <div className="text-sm text-gray-500">
                    {product.category}
                  </div>
                  <div className="font-medium text-lg">{product.name}</div>
                  <div className="text-sm mt-1">{product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* <div className="p-6 overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6">Featured products</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => scroll('left')}
          className="bg-white text-black rounded-full shadow px-3 py-2 text-lg"
        >
          ←
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 bg-white p-4 rounded-xl shadow w-60"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 mx-auto mb-4 object-contain"
              />
              <div className="text-sm text-gray-500">{product.category}</div>
              <div className="font-medium text-lg">{product.name}</div>
              <div className="text-sm mt-1">{product.price}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="bg-black text-white rounded-full shadow px-3 py-2 text-lg"
        >
          →
        </button>
      </div>
    </div> */}

     <div className="p-6">
     <div className="flex flex-row justify-between">
       <h2 className="text-3xl font-semibold mb-6">Featured products</h2>
       <div>
 <button
          onClick={prev}
          className="bg-white text-black rounded-full shadow px-3 py-2 text-lg"
        >
          ←
        </button>
         <button
          onClick={next}
          className="bg-black text-white rounded-full shadow px-3 py-2 text-lg"
        >
          →
        </button>
       </div>
     </div>
      <div className="flex items-center gap-4">
       
        <div className="flex flex-row justify-between gap-6 ">
          {getVisibleProducts().map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 bg-white p-4 rounded-xl shadow w-60  transition duration-500 ease-in-out  animate-fadeIn "
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 mx-auto mb-4 object-contain"
              />
              <div className="text-sm text-gray-500">{product.category}</div>
              <div className="font-medium text-lg">{product.name}</div>
              <div className="text-sm mt-1">{product.price}</div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
      </Layout>
    </>
  );
}

export default Categories;
