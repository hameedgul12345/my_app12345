import React, { useState } from "react";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { productSlice } from "../../redux/slices/productslice";

function SingleProduct() {
  const productState = useSelector((state) => state.product); // not 'productSlice'
  const product = productState.selectedProduct;
  console.log(product);

  const thumbnails = [
    "/images/watch1.png",
    "/images/watch2.png",
    "/images/watch3.png",
    "/images/watch4.png",
  ];
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  if (!productState.selectedProduct) {
    return <h1 className="text-center text-red-500">Product Not Found</h1>;
  }
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
  return (
    <Layout>
      <div className="p-6 md:p-12 w-full bg-white text-black flex flex-col lg:flex-row gap-8">
        {/* Left - Image Section */}
        <div className="flex-1 w-full md:w-[65%]">
          <div className="relative bg-gray-100 rounded-xl">
            <img
              src={product.image}
              alt="Main Watch"
              className="w-full object-contain"
            />
            <span className="absolute top-3 left-3 bg-[#FF7433] text-white text-xs px-2 py-1 rounded">
              On Sale
            </span>
          </div>
          {/* <div className="flex gap-4 mt-4 justify-center">
            {thumbnails.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 p-1 rounded-lg border-2 cursor-pointer ${
                  mainImage === img ? "border-red-500" : "border-gray-300"
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Right - Product Info Section */}
        <div className="flex-1 space-y-4 border-2 p-4 border-gray-200 w-full md:w-[35%]">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <div className="text-yellow-400 text-sm">★★★★★</div>

          <div className="flex items-center gap-3">
            <span className="text-[#FF7433] text-xl font-bold">
              {product.price}
            </span>
          </div>

          <p className="text-sm text-gray-500">{product.description}</p>

          <div className="flex items-center gap-4 mt-2">
            <button className="bg-[#FF7433] hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
          </div>

          <div className=" pt-4 text-sm">
            <p>
              <strong>In Stock:</strong>{" "}
              {product.inStock ? "Available" : "Out of Stock"}
            </p>
          </div>

          <div className=" pt-4 text-sm space-y-1">
            <p>
              📦 <strong>Estimated Delivery:</strong>{" "}
              {product.estimatedDelivery}
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center font-bold text-2xl">Related Products</h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-4 items-center gap-4 mb-6">
        {productList
          .filter((item) => item.category === product.category)
          .map((item) => (
            <div
                key={item.id}
                className="bg-white border-2 border-gray-200 w-full h-[300px] rounded-xl shadow-sm  flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover rounded-lg mb-2"
                />

                <div className="flex flex-col justify-center flex-grow px-2">
                  <h3 className="text-lg font-bold line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="flex justify-between items-center ">
                    <p className="text-black font-semibold text-base">
                      ${item.price}
                    </p>
                    
                  </div>
                </div>
              </div>
          ))}
      </div>
    </Layout>
  );
}

export default SingleProduct;
