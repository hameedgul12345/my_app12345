import React, { useState } from "react";
import Layout from "./Layout";

function SingleProduct() {
   const thumbnails = [
      "/images/watch1.png",
      "/images/watch2.png",
      "/images/watch3.png",
      "/images/watch4.png",
    ];
    const [mainImage, setMainImage] = useState(thumbnails[0]);
  
  return (
    <Layout>
      <h1 className="mx-12 mt-8  text-2xl font-bold">Freshly Roasted Coffee Arabica</h1>
    
<div className="p-6 md:p-12 bg-white text-black flex flex-col lg:flex-row gap-8">
      {/* Left - Image Section */}
      <div className="flex-1">
        <div className="relative bg-gray-100 p-4 rounded-xl">
          <img src={mainImage} alt="Main Watch" className="w-full object-contain" />
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">On Sale</span>
        </div>
        <div className="flex gap-4 mt-4 justify-center">
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
        </div>
      </div>

      {/* Right - Product Info Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">CLASSIC WATCH</h2>
        <div className="text-yellow-400 text-sm">★★★★★</div>

        <div className="flex items-center gap-3">
          <span className="text-red-600 text-xl font-bold">$140.00 USD</span>
          <span className="text-gray-400 line-through">$150.00 USD</span>
        </div>

        <p className="text-sm text-gray-500">
          Effect font move vertical share. Connection frame edit export arrow. Undo device move opacity image layer. List star blur strikethrough arrow.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-16 px-2 py-1 border rounded text-center"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold">
            Add to Cart
          </button>
        </div>

        <div className="border-t pt-4 text-sm">
          <p><strong>SKU:</strong> NX95A76K</p>
          <p><strong>Brand:</strong> LogiX</p>
          <p><strong>In Stock:</strong> Available</p>
          <p className="mt-2"><strong>Share:</strong> <span className="inline-block ml-1">🔗</span></p>
        </div>

        <div className="border-t pt-4 text-sm space-y-1">
          <p>📦 <strong>Estimated Delivery:</strong> 4 Days</p>
          <p>🚚 <strong>Free Shipping & Returns:</strong> On all orders over $75</p>
        </div>

        <div className="pt-4 text-sm">
          <p className="font-bold mb-2">Safe Checkouts</p>
          <div className="flex flex-wrap gap-2">
            <img src="/images/stripe.png" alt="Stripe" className="h-6" />
            <img src="/images/visa.png" alt="Visa" className="h-6" />
            <img src="/images/paypal.png" alt="PayPal" className="h-6" />
            <img src="/images/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/images/amex.png" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>
    </div>

      <h1 className="text-center">Related Products</h1>
      <div className="flex flex-row justify-center w-full gap-4 px-8 py-4">
        <div className="w-[25%] bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
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

        <div className="w-[25%] bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
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
        <div className="w-[25%] bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
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
        <div className="w-[25%] bg-[#ede0bd] rounded-xl flex flex-col justify-center items-center p-6 relative">
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
