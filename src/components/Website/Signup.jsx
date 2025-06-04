// import React, { useState } from "react";

// function Signin() {
//   const [role, setRole] = useState("customer");
//   return (
//     <div
//       style={{
//         backgroundImage: `url('/images/mountain2.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "black",
//           opacity: "0.7",
//           height: "100vh",
//           width: "100%",
//         }}
//         className="flex items-center justify-center gap-8"
//       >
//         {/* <div className="backdrop-blur-lg bg-white/10  border rounded-tr-lg rounded-br-lg border-white/30  p-8 w-96 shadow-lg ">

//         </div> */}
//         {/* Left Panel */}
//         <div className=" bg-teal-800 w-[40%] h-[78vh] text-white p-10 flex flex-col justify-between border rounded-tr-[100px] rounded-br-[100px] border-white/30 ">
//           <div className="flex flex-col items-center justify-center h-full">
//             <div>
//               {" "}
//               <h1 className="text-center text-2xl">Your Logo</h1>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold mb-2">Hi, Welcome!!</h2>
//               <p className="mb-2 text-[16px]">
//                 Enter your details to Signup or Signup with <br /> social media
//                 apps
//               </p>
//               <p className="mb-6 text-[16px]">
//                Already registered? Click below to login.
//               </p>
//               <button className="bg-white text-teal-800 text-xl font-semibold hover:bg-gray-100 px-4 py-2 rounded">
//                Login
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-lg p-8 w-96 shadow-lg text-white">
//           <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
//           <div className="mb-4">
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full p-3 rounded bg-gray-200 rounded-fulltext-white focus:outline-none"
//             >
//               <option className="text-black" value="customer">
//                 Customer
//               </option>
//               <option className="text-black" value="seller">
//                 Seller
//               </option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 gap-4 mb-4">
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
//             />
//           </div>

//           <button className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
//             Signup
//           </button>
//           <div className="mt-6 text-center text-sm text-white-500">
//             Or Register with{" "}
//           </div>

//           <div className="flex justify-center mt-4 space-x-4">
//             <i className="ri-google-fill text-2xl text-white"></i>
//             <i className="ri-facebook-fill  text-2xl text-white"></i>

//             <i className="ri-tiktok-line  text-2xl text-white"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;

import React, { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [role, setRole] = useState("customer");
   const navigateToSignup = useNavigate()
  return (
   <Layout>
     <div className="min-h-screen flex flex-col">
      {/* Registration Form Section */}
      <section className="flex-grow py-12 px-6 opacity-100 min-h-[70vh]">
        <div className="container mx-auto max-w-6xl">
          <div className="  overflow-hidden pb-4 flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative overflow-hidden border  md:h-[100vh]">
              <img
                src="https://img.freepik.com/free-photo/beautiful-rendering-steel-object_23-2151897674.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740"
                alt="Gadgets and Electronics"
                className="w-full  object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h2 className=" text-3xl font-bold mb-2 text-white">
                  Wellcome to My Website
                </h2>
                <p className="/90 mb-4 text-white">
                  Discover premium gadgets and exclusive deals
                </p>
                <div className="flex space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-mobile-alt  text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-laptop  text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-headphones  text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-camera  text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-1/2 pb-4 md:p-8 min-h-[100vh]">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Create Your Account
                </h2>
                <p className="text-gray-600 mt-2">
                  Join us for exclusive offers and updates
                </p>
              </div>

              <form action="">
                <div className="mb-4">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-3 text-black bg-gray-200 rounded-full  "
                  >
                    <option className="text-black" value="customer">
                      Customer
                    </option>
                    <option className="text-black" value="seller">
                      Seller
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-2">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-3 mt-3 text-black bg-gray-200 rounded-full placeholder-black  focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 mt-3 text-black bg-gray-200 rounded-full placeholder-black  focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 mb-2">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 mt-3 text-black bg-gray-200 rounded-full placeholder-black  focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full p-3 mt-3 text-black bg-gray-200 rounded-full placeholder-black  focus:outline-none"
                  />
                </div>

                <button className="w-[30%] mt-3 py-2 bg-[#ff5733] text-white font-semibold rounded-sm transition">
                  Sign Up
                </button>

                <div className="mt-2 text-center  text-sm -500">
                  Or Register with Social Media
                </div>

                <div className="flex justify-center mt-2 space-x-4">
                  <i className="ri-google-fill text-2xl "></i>
                  <i className="ri-facebook-fill text-2xl "></i>
                  <i className="ri-tiktok-line text-2xl "></i>
                </div>
              </form>

              <div className="mt-2 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={() => navigateToSignup("/login")}
                    className="text-[#ff5733] font-medium hover:underline cursor-pointer"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
   </Layout>
  );
}

export default Signup;
