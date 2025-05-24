import React, { useState } from "react";

function Signin() {
  const [role, setRole] = useState("customer");
  return (
    <div
      style={{
        backgroundImage: `url('/images/mountain2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          opacity: "0.7",
          height: "100vh",
          width: "100%",
        }}
        className="flex items-center justify-center gap-8"
      >
        {/* <div className="backdrop-blur-lg bg-white/10  border rounded-tr-lg rounded-br-lg border-white/30  p-8 w-96 shadow-lg text-white">
          
        </div> */}
        {/* Left Panel */}
        <div className=" bg-teal-800 w-[40%] h-[78vh] text-white p-10 flex flex-col justify-between border rounded-tr-[100px] rounded-br-[100px] border-white/30 ">
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              {" "}
              <h1 className="text-center text-2xl">Your Logo</h1>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Hi, Welcome!!</h2>
              <p className="mb-4 text-[16px]">
                Enter your details to Signup or Signup with <br /> social media
                apps
              </p>
              <p className="mb-6 text-[16px]">
               Already registered? Click below to login.
              </p>
              <button className="bg-white text-teal-800 text-xl font-semibold hover:bg-gray-100 px-4 py-2 rounded">
               Login
              </button>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-lg p-8 w-96 shadow-lg text-white">
          <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 rounded bg-white/20 text-white focus:outline-none"
            >
              <option className="text-black" value="customer">
                Customer
              </option>
              <option className="text-black" value="seller">
                Seller
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
            />
          </div>

          <button className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
            Signup
          </button>
          <div className="mt-6 text-center text-sm text-white-500">
            Or Register with{" "}
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <i className="ri-google-fill text-2xl text-white"></i>
            <i className="ri-facebook-fill  text-2xl text-white"></i>

            <i className="ri-tiktok-line  text-2xl text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
