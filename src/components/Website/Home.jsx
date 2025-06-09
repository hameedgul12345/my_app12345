import React, { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeProducts } from "../../redux/slices/productslice";
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

  // const productList = [
  //   // Furniture
  //   {
  //     id: 1,
  //     category: "Furniture",
  //     title: "Gaming Chair",
  //     price: "$149.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/comfortable-gaming-chair-isolated-white_123827-23439.jpg",
  //   },
  //   {
  //     id: 2,
  //     category: "Furniture",
  //     title: "Office Desk",
  //     price: "$249.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/modern-desk-arrangement-home-office_23-2149371321.jpg",
  //   },
  //   {
  //     id: 3,
  //     category: "Furniture",
  //     title: "Bookshelf",
  //     price: "$89.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/interior-living-room-with-bookshelf_23-2148914627.jpg",
  //   },
  //   {
  //     id: 4,
  //     category: "Furniture",
  //     title: "Coffee Table",
  //     price: "$109.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/coffee-table-isolated-white-background_1203-1675.jpg",
  //   },

  //   // Cosmetics
  //   {
  //     id: 5,
  //     category: "Cosmetics",
  //     title: "Makeup Kit",
  //     price: "$39.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/flat-lay-makeup-brushes-eyeshadow_23-2148423210.jpg",
  //   },
  //   {
  //     id: 6,
  //     category: "Cosmetics",
  //     title: "Lipstick Set",
  //     price: "$24.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/lipsticks-set-white-background_23-2148477021.jpg",
  //   },
  //   {
  //     id: 7,
  //     category: "Cosmetics",
  //     title: "Face Cream",
  //     price: "$19.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/white-cream-container-with-golden-lid_23-2147949453.jpg",
  //   },
  //   {
  //     id: 8,
  //     category: "Cosmetics",
  //     title: "Perfume Bottle",
  //     price: "$29.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/elegant-perfume-bottle-pink-background_23-2149302760.jpg",
  //   },

  //   // Cameras
  //   {
  //     id: 9,
  //     category: "Cameras",
  //     title: "DSLR Camera",
  //     price: "$499.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/dslr-camera-isolated-white_1203-7129.jpg",
  //   },
  //   {
  //     id: 10,
  //     category: "Cameras",
  //     title: "Action Camera",
  //     price: "$149.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/modern-sports-camera-white-background_93675-134003.jpg",
  //   },
  //   {
  //     id: 11,
  //     category: "Cameras",
  //     title: "Camera Lens",
  //     price: "$129.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/telephoto-camera-lens-isolated-white_1203-7130.jpg",
  //   },
  //   {
  //     id: 12,
  //     category: "Cameras",
  //     title: "Tripod Stand",
  //     price: "$34.99 USD",
  //     image:
  //       "https://img.freepik.com/free-photo/tripod-stand-isolated-white-background_1203-7272.jpg",
  //   },
  // ];
  const productList = [
    // Furniture
    {
      id: 1,
      category: "Furniture",
      title: "Gaming Chair",
      price: "$149.99 USD",
      image:
        "https://img.freepik.com/premium-photo/white-gaming-armchair-3d-rendering-icon-white-background_187882-3344.jpg?uid=R114394203&ga=GA1.1.1840668077.1740570776&semt=ais_items_boosted&w=740",
      reviews: 87,
      estimatedDelivery: "3 - 5 Days",
      inStock: "Available",
      description:
        "Ergonomic gaming chair with adjustable height, lumbar support, and breathable leather material. Designed for long gaming or work sessions to ensure maximum comfort and healthy posture throughout the day.",
    },
    {
      id: 2,
      category: "Furniture",
      title: "Office Desk",
      price: "$249.99 USD",
      image:
        "https://img.freepik.com/premium-photo/office-workplace-desk-front-empty-chair-isolated-white-background-neural-network-generated-image_636705-9951.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      reviews: 65,
      estimatedDelivery: "5 - 7 Days",
      inStock: "Available",
      description:
        "Spacious office desk with wooden surface and metal legs. Perfect for home or workplace setups, offering stability, storage compartments, and a sleek design for a productive work environment.",
    },
    {
      id: 3,
      category: "Furniture",
      title: "Bookshelf",
      price: "$89.99 USD",
      image:
        "https://img.freepik.com/premium-photo/white-book-shelf-with-books-it-white-background_1059430-90442.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      reviews: 48,
      estimatedDelivery: "4 - 6 Days",
      inStock: "Not-Available",
      description:
        "Stylish and sturdy bookshelf with five tiers to organize your books, decor, or plants. Made with engineered wood, ideal for living rooms, studies, or bedrooms with limited space.",
    },
    {
      id: 4,
      category: "Furniture",
      title: "Coffee Table",
      price: "$109.99 USD",
      image:
        "https://img.freepik.com/premium-photo/round-coffee-table-end-table-isolated-white-background-with-clipping-path-small-round-white-table-with-3-legs-white-background_1072643-1492.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
      reviews: 51,
      estimatedDelivery: "3 - 5 Days",
      inStock: "Available",
      description:
        "Modern coffee table with glass top and wooden legs. A perfect centerpiece for your living room, offering style and functionality for tea, books, or decorative accessories.",
    },

    // Cosmetics
    {
      id: 5,
      category: "Cosmetics",
      title: "Makeup Kit",
      price: "$39.99 USD",
      image:
        "https://img.freepik.com/premium-photo/cosmetic-bag-with-beauty-accessory-makeup-product_479776-456.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      reviews: 76,
      estimatedDelivery: "2 - 4 Days",
      inStock: "Available",
      description:
        "Complete makeup kit with brushes, eyeshadow, blush, and more. Ideal for daily use or travel, this set enhances beauty routines with vibrant, long-lasting color and professional application.",
    },
    {
      id: 6,
      category: "Cosmetics",
      title: "Lipstick Set",
      price: "$24.99 USD",
      image:
        "https://img.freepik.com/premium-photo/lipsticks-different-colors-arranged-circle_339569-671.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
      reviews: 39,
      estimatedDelivery: "3 - 5 Days",
      inStock: "Available",
      description:
        "Color-rich lipstick set in various shades for every occasion. Smooth application, nourishing ingredients, and long-lasting wear that hydrates and defines lips with a bold or natural look.",
    },
    {
      id: 7,
      category: "Cosmetics",
      title: "Face Cream",
      price: "$19.99 USD",
      image:
        "https://img.freepik.com/premium-vector/cream-cosmetics-realistic-mock-up_1268-2422.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
      reviews: 64,
      estimatedDelivery: "2 - 3 Days",
      inStock: "Not-Available",
      description:
        "Hydrating face cream enriched with vitamins and natural extracts. Designed to restore skin elasticity, reduce dryness, and leave your face feeling soft, radiant, and deeply moisturized all day.",
    },
    {
      id: 8,
      category: "Cosmetics",
      title: "Perfume Bottle",
      price: "$29.99 USD",
      image:
        "https://img.freepik.com/premium-photo/illustration-blank-perfume-bottle-heart-type-isolated-white-background-high-resolution-hig_949828-24116.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      reviews: 57,
      estimatedDelivery: "3 - 5 Days",
      inStock: "Available",
      description:
        "Elegant perfume with a floral-fruity blend. Perfect for everyday wear, the scent is long-lasting and packaged in a stylish bottle suitable for gifting or personal fragrance collection.",
    },

    // Cameras
    {
      id: 9,
      category: "Cameras",
      title: "DSLR Camera",
      price: "$499.99 USD",
      image:
        "https://img.freepik.com/premium-photo/digital-photo-camera-isolated-white-wall_199107-217.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      reviews: 112,
      estimatedDelivery: "2 - 4 Days",
      inStock: "Available",
      description:
        "High-resolution DSLR camera with interchangeable lens support. Ideal for professional photography or hobbyists seeking advanced controls, great image quality, and versatile shooting modes indoors or outdoors.",
    },

    {
      id: 12,
      category: "Cameras",
      title: "Tripod Stand",
      price: "$34.99 USD",
      image:
        "https://img.freepik.com/premium-photo/black-smartphone-tripod-with-wireless-remote-control-isolated-white-background-with-copy-space_888032-321.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_hybrid&w=740",
      reviews: 61,
      estimatedDelivery: "3 - 5 Days",
      inStock: "Available",
      description:
        "Durable and lightweight tripod stand with adjustable height. Supports cameras and smartphones for stable photography or video recording. Includes quick-release plate and 360-degree rotation head.",
    },
    {
      id: 10,
      category: "Cameras",
      title: "Action Camera",
      price: "$149.99 USD",
      image:
        "https://img.freepik.com/premium-photo/camera-that-has-camera-it_1189726-13049.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
      reviews: 88,
      estimatedDelivery: "3 - 6 Days",
      inStock: "Available",
      description:
        "Compact and waterproof action camera built for adventure. Records in HD, includes mounting accessories, and withstands tough environments for capturing sports, travel, or underwater experiences easily.",
    },

    {
      id: 11,
      category: "Cameras",
      title: "Camera Lens",
      price: "$129.99 USD",
      image:
        "https://img.freepik.com/premium-vector/realistic-lens-design_1078-84.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740",
      reviews: 74,
      estimatedDelivery: "4 - 6 Days",
      inStock: "Not-Available",
      description:
        "Versatile camera lens with advanced optics and wide aperture. Perfect for portraits, landscapes, and close-ups. Compatible with popular DSLR mounts, delivering sharp images with beautiful background blur.",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Wireless Keyboard",
      category: "Technology",
      price: "$49.99",
      image: "/images/keyboard.png",
    },
    {
      id: 2,
      title: "Backpack",
      category: "Gear",
      price: "$39.99",
      image: "/images/backpack.png",
    },
    {
      id: 3,
      title: "iPhone Case",
      category: "Gear",
      price: "$29.99",
      image: "/images/iphone-case.png",
    },
    {
      id: 4,
      title: "VR Headset",
      category: "Technology",
      price: "$579.99",
      image: "/images/vr-headset.png",
    },
    {
      id: 5,
      title: "Wooden Chair",
      category: "Furniture",
      price: "$89.99",
      image: "/images/chair.png",
    },
    {
      id: 6,
      title: "DSLR Camera",
      category: "Camera",
      price: "$999.99",
      image: "/images/camera.png",
    },
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
  const dispatch = useDispatch();

  const buyNow = (product) => {
    dispatch(storeProducts(product));
    navigate("/singleproduct");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-4 bg-white">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1
            className="text-2xl  md:text-5xl font-bold text-[#FF6433] leading-tight"
            style={{
              fontFamily: "M PLUS Rounded 1c",

              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
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
      <h1 className="text-center text-2xl text-[#FF6433]  md:text-5xl font-bold my-4">
        Product Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12 bg-white">
        {category.map((cat) => (
          <div
            key={cat.title}
            className="rounded-3xl shadow-md text-center p-6 hover:shadow-lg cursor-pointer transition-all"
            onClick={() => setSelectedCategory(cat.title)}
          >
            <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
            <p className="text-sm text-justify text-gray-500 mb-4">
              {cat.description}
            </p>
            <span
              className="text-sm font-semibold text-black underline underline-offset-4 flex items-center justify-center gap-2 mb-4"
              onClick={() => navigate("/furniturecategory")}
            >
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
      <h1 className="text-center text-2xl  md:text-5xl font-bold my-8 text-[#FF6433]">
        Product Gallery
      </h1>
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
            {selectedCategory}
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
        <div className="grid grid-cols-1 w-full md:grid-cols-4 items-center gap-4 mb-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white pt-2 border-2 border-gray-200 w-full h-[300px] rounded-xl shadow-sm  flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[220px] object-cover rounded-lg mb-2"
                />

                <div className="flex flex-col justify-center flex-grow px-2">
                  <h3 className="text-lg font-bold line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex justify-between items-center ">
                    <p className="text-black font-semibold text-base">
                      ${product.price}
                    </p>
                    <i
                      className="ri-arrow-right-line text-xl cursor-pointer hover:text-blue-600 transition"
                      onClick={() => buyNow(product)}
                    ></i>
                  </div>
                </div>
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
