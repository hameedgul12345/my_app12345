import React from "react";
import Layout from "./Layout";

function SingleProduct() {
  return (
    <Layout>
      <h1>Freshly Roasted Coffee Arabica</h1>
      <div className="min-h-screen  flex justify-center items-center p-6">
        <div className="max-w-6xl bg-white rounded-xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Product Image */}
          <div className="bg-[#ede0bd] rounded-xl flex justify-center items-center p-6 relative">
            <img
              src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cardboard Paper Bag"
              className="max-h-96"
            />
            <div className="absolute top-4 right-4 text-xl cursor-pointer">
              <i className="ri-search-line text-gray-700 hover:text-black"></i>
            </div>
          </div>

          {/* Product Description */}
          <div className="md:col-span-1 md:col-start-2 text-gray-700 text-sm space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam...
            </p>
          </div>

          {/* Price & Actions */}
          <div className="space-y-6 border border-[#efe1bd] rounded-xl p-6">
            {/* Price */}
            <div>
              <p className="line-through text-gray-500 text-lg">$55.00</p>
              <p className="text-2xl font-bold text-black">$42.00</p>
            </div>

            {/* Quantity & Cart */}
            <div className="flex items-center gap-3">
              <button className="bg-[#d3c693] px-4 py-2 rounded-full text-black">
                1
              </button>
              <button className="bg-[#463b34] text-white px-6 py-2 rounded-full hover:bg-black">
                Add to cart
              </button>
            </div>

            {/* Share */}
            <div>
              <h4 className="font-semibold text-lg mb-2">Share Product</h4>
              <div className="flex gap-4 text-[#463b34] text-xl">
                <i className="ri-facebook-fill hover:text-blue-600 cursor-pointer"></i>
                <i className="ri-twitter-fill hover:text-sky-400 cursor-pointer"></i>
                <i className="ri-pinterest-fill hover:text-red-600 cursor-pointer"></i>
                <i className="ri-whatsapp-fill hover:text-green-500 cursor-pointer"></i>
              </div>
            </div>

            {/* Benefits List */}
            <ul className="text-sm text-gray-700 space-y-2 pt-4">
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-fill text-green-600"></i> Free
                Shipping Up To $54
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-fill text-green-600"></i>{" "}
                Guaranteed Enjoyment
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-fill text-green-600"></i> Money
                Back Guarantee
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-close-circle-fill text-red-500"></i> Free
                Support 24/7
              </li>
            </ul>
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
