import React, { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const category = [
  {
    title: "Furniture",
    description:
      "Explore a wide range of stylish and functional furniture for your home or office, including chairs, desks, shelves, and tables designed for comfort and elegance.",
    image:
      "https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-22774.jpg",
  },
  {
    title: "Cameras",
    description:
      "Capture your best moments with our collection of high-quality cameras, from professional DSLRs to compact action cams and essential accessories.",
    image:
      "https://img.freepik.com/premium-photo/dslr-camera-white_144962-4376.jpg",
  },
  {
    title: "Cosmetics",
    description:
      "Discover beauty essentials and skincare products including makeup kits, lipsticks, creams, and fragrances to enhance your natural glow.",
    image:
      "https://img.freepik.com/free-photo/still-life-care-products_23-2149371308.jpg",
  },
];


  const productList = [
  // Furniture
  {
    id: 1,
    category: "Furniture",
    title: "Gaming Chair",
    price: "$149.99 USD",
    image: "https://img.freepik.com/free-photo/comfortable-gaming-chair-isolated-white_123827-23439.jpg",
  },
  {
    id: 2,
    category: "Furniture",
    title: "Office Desk",
    price: "$249.99 USD",
    image: "https://img.freepik.com/free-photo/modern-desk-arrangement-home-office_23-2149371321.jpg",
  },
  {
    id: 3,
    category: "Furniture",
    title: "Bookshelf",
    price: "$89.99 USD",
    image: "https://img.freepik.com/free-photo/interior-living-room-with-bookshelf_23-2148914627.jpg",
  },
  {
    id: 4,
    category: "Furniture",
    title: "Coffee Table",
    price: "$109.99 USD",
    image: "https://img.freepik.com/free-photo/coffee-table-isolated-white-background_1203-1675.jpg",
  },

  // Cosmetics
  {
    id: 5,
    category: "Cosmetics",
    title: "Makeup Kit",
    price: "$39.99 USD",
    image: "https://img.freepik.com/free-photo/flat-lay-makeup-brushes-eyeshadow_23-2148423210.jpg",
  },
  {
    id: 6,
    category: "Cosmetics",
    title: "Lipstick Set",
    price: "$24.99 USD",
    image: "https://img.freepik.com/free-photo/lipsticks-set-white-background_23-2148477021.jpg",
  },
  {
    id: 7,
    category: "Cosmetics",
    title: "Face Cream",
    price: "$19.99 USD",
    image: "https://img.freepik.com/free-photo/white-cream-container-with-golden-lid_23-2147949453.jpg",
  },
  {
    id: 8,
    category: "Cosmetics",
    title: "Perfume Bottle",
    price: "$29.99 USD",
    image: "https://img.freepik.com/free-photo/elegant-perfume-bottle-pink-background_23-2149302760.jpg",
  },

  // Cameras
  {
    id: 9,
    category: "Cameras",
    title: "DSLR Camera",
    price: "$499.99 USD",
    image: "https://img.freepik.com/free-photo/dslr-camera-isolated-white_1203-7129.jpg",
  },
  {
    id: 10,
    category: "Cameras",
    title: "Action Camera",
    price: "$149.99 USD",
    image: "https://img.freepik.com/free-photo/modern-sports-camera-white-background_93675-134003.jpg",
  },
  {
    id: 11,
    category: "Cameras",
    title: "Camera Lens",
    price: "$129.99 USD",
    image: "https://img.freepik.com/free-photo/telephoto-camera-lens-isolated-white_1203-7130.jpg",
  },
  {
    id: 12,
    category: "Cameras",
    title: "Tripod Stand",
    price: "$34.99 USD",
    image: "https://img.freepik.com/free-photo/tripod-stand-isolated-white-background_1203-7272.jpg",
  },
];


const products = [
  { id: 1, title: 'Wireless Keyboard', category: 'Technology', price: '$49.99', image: '/images/keyboard.png' },
  { id: 2, title: 'Backpack', category: 'Gear', price: '$39.99', image: '/images/backpack.png' },
  { id: 3, title: 'iPhone Case', category: 'Gear', price: '$29.99', image: '/images/iphone-case.png' },
  { id: 4, title: 'VR Headset', category: 'Technology', price: '$579.99', image: '/images/vr-headset.png' },
  { id: 5, title: 'Wooden Chair', category: 'Furniture', price: '$89.99', image: '/images/chair.png' },
  { id: 6, title: 'DSLR Camera', category: 'Camera', price: '$999.99', image: '/images/camera.png' },
];


  const categories = ["All", "Furniture", "Cosmetics", "Cameras"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productList.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-4 bg-white">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-2xl  md:text-5xl font-bold text-[#FF6433] leading-tight">
            Explore the Future of Shopping Today
          </h1>
          <p className="text-gray-600 text-sm md:text-base text-justify">
            Discover the latest tech gadgets and accessories that elevate your
            lifestyle. From smart home devices to cutting-edge wearables, we
            have everything you need to stay connected and ahead of the curve.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/products")}
              className="bg-[#FF6333] w-56 md:w-44 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Browse products
            </button>
           
          </div>
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/shopping-cart_1284-672.jpg"
            alt="Tech gadget"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Category Section */}
      <h1 className="text-center text-2xl text-[#FF6433]  md:text-5xl font-bold my-4">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12 bg-white">
        {category.map((cat) => (
          <div
            key={cat.title}
            className="rounded-3xl shadow-md text-center p-6 hover:shadow-lg cursor-pointer transition-all"
            onClick={() => setSelectedCategory(cat.title)}
          >
            <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
            <p className="text-sm text-justify text-gray-500 mb-4">{cat.description}</p>
            <span className="text-sm font-semibold text-black underline underline-offset-4 flex items-center justify-center gap-2 mb-4" onClick={() => navigate("/categories")}>
              Explore category →
            </span>
            <img
              src={cat.image}
              alt={cat.title}
              className="mx-auto h-40 object-contain"
            />
          </div>
        ))}
      </div>
 <h1 className="text-center text-2xl  md:text-5xl font-bold my-8 text-[#FF6433]">Product Gallery</h1>
      {/* Product Section */}
      <div className="p-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
          <div className="flex gap-4 text-sm font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`${
                  selectedCategory === cat
                    ? "text-black underline"
                    : "text-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-gray-400 text-sm hidden md:block">
            / {selectedCategory}
          </div>

          <input
            type="text"
            placeholder="Search for products"
            className="border border-gray-300 px-3 py-1 rounded-md text-sm w-full max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mb-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow-sm text-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-contain mx-auto mb-4"
                />
               
               <div className="flex flex-row justify-center gap-8">
                 <h3 className="font-semibold text-sm mt-1">{product.title}</h3>
                <p className="text-black font-bold text-sm mt-2">
                  {product.price}
                </p>
               </div>
                <button onClick={()=>{navigate('/singleProduct')}} className=" py-2 px-4 bg-[#FF6333] rounded-full text-white font-bold w-46 mt-4">Click to Buy</button>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No products found.
            </p>
          )}
        </div>
      </div>

      
    </Layout>
  );
}

export default Home;
