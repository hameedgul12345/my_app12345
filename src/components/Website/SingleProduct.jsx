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
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
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
            <span className="text-red-600 text-xl font-bold">
              {product.price}
            </span>
          </div>

          <p className="text-sm text-gray-500">{product.description}</p>

          <div className="flex items-center gap-4 mt-2">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold">
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

      <h1 className="text-center">Related Products</h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-4 items-center gap-4 mb-6">
        <div className="md:w-[100%] w-full bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Armor Okwahn II</h1>
          <h1>$90.00 $170.00</h1>
          <button className="mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-all">
            Buy Now
          </button>
        </div>

        <div className="md:w-[100%] w-full bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Armor Okwahn II</h1>
          <h1>$90.00 $170.00</h1>
          <button className="mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-all">
            Buy Now
          </button>
        </div>
        <div className="md:w-[100%] w-full bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Armor Okwahn II</h1>
          <h1>$90.00 $170.00</h1>
          <button className="mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-all">
            Buy Now
          </button>
        </div>
        <div className="md:w-[100%] w-full bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Armor Okwahn II</h1>
          <h1>$90.00 $170.00</h1>
          <button className="mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default SingleProduct;
