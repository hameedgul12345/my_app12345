import React, { useRef, useState } from "react";
import Layout from "./Layout";

const products = [
  {
    id: 1,
    category: "FURNITURE",
    name: "Modern Sofa",
    price: "$579.99 USD",
    image:
      "https://img.freepik.com/free-psd/grey-sofa-isolated_23-2151848255.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },
  {
    id: 2,
    category: "FURNITURE",
    name: "Wooden Coffee Table",
    price: "$129.99 USD",
    image:
      "https://img.freepik.com/free-vector/modern-black-oval-coffee-table-white-background-realistic-vector-illustration_1284-66955.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },
  {
    id: 3,
    category: "FURNITURE",
    name: "Stylish Bookshelf",
    price: "$199.99 USD",
    image:
      "https://img.freepik.com/free-photo/nordic-style-bookshelf-with-plant_23-2148461338.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },
  {
    id: 4,
    category: "FURNITURE",
    name: "Dining Chair Set",
    price: "$249.99 USD",
    image:
      "https://img.freepik.com/free-photo/table-setting-dinner_74190-2126.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },
  {
    id: 5,
    category: "FURNITURE",
    name: "King Size Bed Frame",
    price: "$699.99 USD",
    image:
      "https://img.freepik.com/free-vector/realistic-bed-with-two-pillows-bedcover-night-lamps-vector-illustration_1284-66909.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },

  {
    id: 7,
    category: "FURNITURE",
    name: "TV Stand",
    price: "$189.99 USD",
    image:
      "https://img.freepik.com/premium-photo/modern-curved-led-lcd-smart-tv-screen-mockup-wooden-console-rack-3d-rendering_476612-23201.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },

  {
    id: 9,
    category: "FURNITURE",
    name: "Office Desk",
    price: "$229.99 USD",
    image:
      "https://img.freepik.com/premium-photo/laptop-display-mockup-table-white-room-3d-rendering_43614-64.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },
  {
    id: 10,
    category: "FURNITURE",
    name: "Bedside Table",
    price: "$89.99 USD",
    image:
      "https://img.freepik.com/premium-photo/potted-plant-table-against-white-wall-home_1048944-14560044.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
  },
];

const categories = ["Technology", "Gear", "Audio"];

const featured = [
  { id: 1, title: "Backpack", price: 39.99, image: "/images/backpack.png" },
  {
    id: 2,
    title: "Wireless Keyboard",
    price: 49.99,
    image: "/images/keyboard.png",
  },
  { id: 3, title: "VR Headset", price: 579.99, image: "/images/vr.png" },
];

const allProducts = [
  {
    id: 4,
    category: "Gear",
    title: "Water Bottle",
    price: 12.99,
    image: "/images/waterbottle.png",
  },
  {
    id: 5,
    category: "Gear",
    title: "iPhone Case",
    price: 29.99,
    image: "/images/iphonecase.png",
  },
  {
    id: 6,
    category: "Technology",
    title: "Laptop Stand",
    price: 89.99,
    image: "/images/laptopstand.png",
  },
];

function Accessories() {
  const [index, setIndex] = useState(0);
  const visibleCount = 5; // Show 3 items at a time
  const [selectedCategory, setSelectedCategory] = useState("Gear");

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );
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
            <h1 className="text-4xl font-bold mb-4">Furnture</h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
              Discover timeless comfort and modern style with our premium
              furniture collection. From elegant sofas to functional tables,
              each piece is crafted to elevate your living space with quality,
              beauty, and lasting durability. Perfect for every home.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-25459.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740"
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
                  <div className="text-sm text-gray-500">
                    {product.category}
                  </div>
                  <div className="font-medium text-lg">{product.name}</div>
                  <div className="text-sm mt-1">{product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full min-h-screen px-6 py-10 bg-white">
          {/* Sidebar */}
          <aside className="w-[35%] pr-6 border-r border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Explore by category</h2>
            <ul className="mb-10">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer mb-2 ${
                    selectedCategory === cat
                      ? "font-bold text-black"
                      : "text-gray-500"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mb-4">Featured products</h2>
            <ul className="space-y-4">
              {featured.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">
                      ${item.price.toFixed(2)} USD
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Grid */}
          <main className="w-[65%] pl-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-contain rounded-t-lg"
                  />
                  <p className="text-xs text-gray-500 mt-4 uppercase">
                    {product.category}
                  </p>
                  <h3 className="text-md font-semibold">{product.title}</h3>
                  <p className="text-black font-bold mt-1">
                    ${product.price.toFixed(2)} USD
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}

export default Accessories
